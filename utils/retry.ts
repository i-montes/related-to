import { z } from 'zod';

/**
 * Retry fetch with Zod schema validation
 * @param fetchFn - Function that performs the fetch
 * @param schema - Zod schema to validate the response
 * @param options - Configuration options for retrying
 * @returns Validated response data
 */
export async function retry<T extends z.ZodTypeAny>(
    fetchFn: (prompt: string) => Promise<Response>, 
    prompt: string,
    schema: T, 
    options: {
        maxRetries?: number;
        delay?: number;
        exponentialBackoff?: boolean;
    } = {}
): Promise<z.infer<T>> {
    const {
        maxRetries = 5,
        delay = 1000,
        exponentialBackoff = true
    } = options;

    let retryCount = 0;

    while (retryCount < maxRetries) {
        try {
            // Perform the fetch
            const response = await fetchFn(prompt);

            // Validate with Zod schema
            return schema.parse(response);
        } catch (error) {
            retryCount++;

            // Calculate delay with optional exponential backoff
            const currentDelay = exponentialBackoff 
                ? delay * Math.pow(2, retryCount - 1)
                : delay;

            // If max retries reached, throw the last error
            if (retryCount >= maxRetries) {
                throw error;
            }

            // Log the error and wait before retrying
            console.warn(`Attempt ${retryCount} failed. Retrying in ${currentDelay}ms...`);

            // Wait before next retry
            await new Promise(resolve => setTimeout(resolve, currentDelay));
        }
    }

    throw new Error('Max retries reached');
}
