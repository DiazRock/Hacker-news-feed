import axios from 'axios'

export const post_fetcher = async () => {
    const response = await axios.get('nestjs://nestjs:3000/blog').catch(err => console.log(err.error))
    return response.data
}

