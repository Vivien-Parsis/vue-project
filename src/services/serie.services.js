import axios from "axios"
import { api_url } from "../const/config"

export class serieService{
    static async getSerie (email, password) {
        const res = await axios.post(api_url+'/api/serie/get',{email:email,password:password})
        return res.data
    }
    static async searchSerie(email, password, id) {
        const res = await axios.post(api_url+'/api/serie/search?id='+id,{email:email,password:password})
        return res.data
    }
} 
