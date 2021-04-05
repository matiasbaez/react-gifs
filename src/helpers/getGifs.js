const apiKey = 'LPXu9RZt26G29PRkhpSHu9wI6b5paOqt';

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
    const response = await fetch( url );
    const { data } = await response.json();

    const gifs = data.map(element => {
        return {
            id: element.id,
            title: element.title,
            url: element.images?.downsized_medium.url,
        }
    });

    return gifs;
}
