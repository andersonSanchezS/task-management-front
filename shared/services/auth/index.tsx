import axios from 'axios'

export class AuthService {
    static login = async (data: any) => {
        const res = await axios.post(
            'http://localhost:8000/api/auth/login',
            data
        )
        return res.data
    }
}
