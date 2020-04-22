const baseurl = "http://api.tvmaze.com"

export async function fetcher(path) {
    const response = await fetch(baseurl + path)
    const data = await response.json();
    return sanitize(data)
}

export function sanitize(data) {
    const items = Array.isArray(data) ? data : [{ show: data }]    
    
    // mutate the show and add a cover prop
    items.forEach(({show}) => {
        show.cover = show.image && show.image.medium || '/images/groucho.jpg',
        show.year = show.premiered.split('-')[0]
    })
    return data
}