
export async function getMetadataFromWp(url: string) {
    const response = await fetch(`https://api.lasillavacia.com/api/wp/posts?slug=${url}`);
    const data = await response.json();

    if(!data.data) {
        return null;
    }

    const article = data.data[0];

    return {
        id : article.author,
        name: article?.yoast_head_json?.author,
        twitter_misc: article?.yoast_head_json?.twitter_misc?.['Tiempo de lectura'],
    }
}