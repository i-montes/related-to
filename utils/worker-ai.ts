export async function workerAi(
  prompt: string, // min 1, max 131072
  raw: boolean = false,
  stream: boolean = false,
  max_tokens: number = 8000, // default 256
  temperature: number = 0.8, // default 0.6, min 0, max 5
  model: string = process.env.WORKER_AI_MODEL || "@cf/meta/llama-3.1-70b-instruct",
  id_account: string = process.env.CLOUDFLARE_ACCOUNT_ID || "",
) {
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${id_account}/ai/run/${model}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
      },
      method: "POST",
      body: JSON.stringify({
        prompt,
        raw,
        stream,
        max_tokens,
        temperature,
      }),
    }
  );

  try {
    const {
      result: { response },
    } = await res.json();
    return JSON.parse(response);
  } catch (error) {
    const {
      result: { response },
    } = await res.json();
    const match = response.match(/\[\s*{[\s\S]*?}\s*\]/);
    if (match) {
      const json = match[0];
      console.log("FUE POR MATCH");

      return JSON.parse(json);
    }
    throw error;
  }
}
