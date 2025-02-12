
import axios from 'axios'

export const postReq = async ({ URL, data }: any) => {

    const response = await axios.post(URL, data);

    return response
}