import axios from 'axios';

const searchImage = async (string) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos/?query=${string}&client_id=SlFHsMUx2egP93AQ0kQRCGfiBtaqjuHIIuN5dIVRY9Y`)


    return response.data.results;


}

export default searchImage