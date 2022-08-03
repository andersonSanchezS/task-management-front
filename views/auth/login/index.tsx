import { FC, useEffect } from 'react'

// Hooks
import { useFetch } from '../../../shared/hooks/useFetch'
// Services
import { AuthService } from '../../../shared/services/auth'
import { LoginV } from './Login'
// notifications
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { Toast } from '../../../shared/utils/toast'

export const LoginC: FC = () => {
    // Hooks
    const {
        fetch: login,
        data: dataLogin,
        loading: loadLogin,
        error: errLogin
    } = useFetch({ service: AuthService.login, init: false })

    useEffect(() => {
        if (loadLogin) {
            console.log('cargando')
        }
        if (errLogin) {
            Toast('Usuario y/o contraseña incorrectos', 'error')
            console.log('error', errLogin)
        }
        if (dataLogin !== undefined) {
        localStorage.setItem('refresh_token', dataLogin?.refresh)
        localStorage.setItem('access_token', dataLogin?.access)
        Toast('Bienvenido', 'success')
    }
    }, [dataLogin, errLogin, loadLogin])

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        login({
            email: data.get('email'),
            password: data.get('password')
        })        
    }

    return <LoginV onSubmit={onSubmit} ToastContainer={ToastContainer} />
}
