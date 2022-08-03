import { FC, useEffect } from 'react'

// Hooks
import { useFetch } from '../../../shared/hooks/useFetch'
// Services
import { AuthService } from '../../../shared/services/auth'
import { LoginV } from './Login'
// notifications
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
                    toast.error('Usuario y/o contraseña invalidos', {
                        position: 'bottom-right',
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                    })
            console.log('error', errLogin)
        }
        if (dataLogin !== undefined) {
        localStorage.setItem('refresh_token', dataLogin?.refresh)
        localStorage.setItem('access_token', dataLogin?.access)
        console.log('dataLogin', dataLogin)
        toast.success('Bienvenido', {
            position: 'bottom-right',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        })
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
