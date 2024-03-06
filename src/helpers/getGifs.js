export const getGifs = async (categirues) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=HY6fdF37XPON9WiThimVojzxt5OWUYVC&q=${categirues}&limit=10`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))


    console.log(gifs);
    return gifs

}