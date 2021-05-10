import axios from 'axios'

export const post_fetcher = async () => {
    const response = await axios.get('http://localhost:7000/blog').catch(err => console.log(err.error))
    return response.data
}

