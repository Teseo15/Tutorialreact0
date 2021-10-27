const KEY = 'XZ8fHxlyfw3Zq63WxWuVzG9fTmtYeBNt'

export default function getGifs({Keyword = 'morty'}={}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${Keyword}&limit=10&offset=0&rating=g&lang=en`

    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      if (Array.isArray(data)) {
        const gifs = data.map(image =>{ 
            const {images,title, id} = image
            const {url}= images.downsized_medium
            return{title,id,url}
        })
      
        return gifs
      }
    }
    )
}