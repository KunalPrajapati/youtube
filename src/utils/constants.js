const YOUTUBE_API_KEY = 'AIzaSyB0EqKPCurjkNwilWcly5zndnsrGFcs8ZQ';

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOUTUBE_API_KEY}`;

// export const YOUTUBE_SEARCH_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=' 
// export const YOUTUBE_SEARCH_API = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=india&key=${YOUTUBE_API_KEY}`

const YOUTUBE_SEARCH = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyB0EqKPCurjkNwilWcly5zndnsrGFcs8ZQ'
