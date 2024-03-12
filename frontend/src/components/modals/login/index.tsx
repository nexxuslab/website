import { FunctionComponent, useState } from 'react'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

import styles from './styles.module.css'

import { RightArrow } from 'components/icons/arrow/right'
import { X as Close } from 'components/icons/x'
import { http } from 'utils/http'
import { Errors } from 'utils/enum'

const inter = Inter({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
})

export const modalAction = () => {
    const modal = document.getElementById(styles.main)!

    if (modal.style.display === 'flex') {
        modal.style.display = 'none'
    } else {
        modal.style.display = 'flex'
    }
}

const errorMessage: string = 'loginError'

const close = () => {
    document.getElementById(errorMessage)!.style.display = 'none'
    document.getElementById(styles.main)!.style.display = 'none'
}

export const Login: FunctionComponent = () => {
    const router = useRouter()

    const [ loginEmail, setLoginEmail ] = useState<string>('')
    const [ loginPassword, setLoginPassword ] = useState<string>('')
    const [ error, setError ] = useState<string>('')

    const showError = () => {
        document.getElementById(errorMessage)!.style.display = 'flex'
    }

    const login = async () => {
        document.getElementById(errorMessage)!.style.display = 'none'

        try {
            await http.post('v1/users/login', {
                email: loginEmail,
                password: loginPassword,
            })

            router.reload()
        } catch (e: any) {
            if (e.response === undefined) {
                setError('An error occurred')
                showError()
                
                return
            }

            switch (e.response.status) {
                case Errors.badRequest:
                    setError('Invalid email or password')
                    break
                case Errors.unauthorized:
                    setError('Invalid email or password')
                    break
                default:
                    setError('An error occurred')
            }
        }
    }

    return (
        <form className={inter.className} id={styles.main}>
            <div id={errorMessage} style={{
                width: 'stretch',
                height: 'fit-content',
                paddingTop: '3px',
                paddingBottom: '3px',
                paddingLeft: '10px',
                paddingRight: '10px',
                textAlign: 'center',
                backgroundColor: 'rgb(178, 85, 88)',
                color: 'white',
                fontSize: '30px',
                display: 'none',
                borderRadius: '5px',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {error}
            </div>
            <div className={styles.flex_row} style={{ justifyContent: 'space-between' }}>
                <div className={styles.flex_row}>
                    <h1>Login</h1>
                    <RightArrow className={styles.button} onClick={login} />
                </div>
                <Close className={styles.button} onClick={() => { close(); return false }} />
            </div>
            <input
                className={styles.input}
                type='email'
                placeholder='Email'
                value={loginEmail}
                onChange={event => setLoginEmail(event.target.value)}
            />
            <input
                className={styles.input}
                type='password'
                placeholder='Password'
                value={loginPassword}
                onChange={event => setLoginPassword(event.target.value)}
            />
        </form>
    )
}
