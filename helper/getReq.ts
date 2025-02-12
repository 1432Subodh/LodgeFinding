
import axios from 'axios'

export const getReq = async ({ URL }:any) => {

    const response = await axios.get(URL);

    return response
}