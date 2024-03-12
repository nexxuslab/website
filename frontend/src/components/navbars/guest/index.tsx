import { FunctionComponent, useState, Fragment } from 'react'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

import styles from '../styles.module.css'

import { Login, modalAction as login } from 'components/modals/login'
import { Register, modalAction as register } from 'components/modals/register'
import { ShootingStar } from 'components/icons/star/shooting'

const inter = Inter({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin'],
})

export const Navbar: FunctionComponent = () => {
    const router = useRouter()

    const home = () => {
        router.push('/')
    }

    return (
        <Fragment>
            <form className={inter.className} style={{
                width: 'calc(stretch - 20px)',
                height: 'fit-content',
                paddingTop: '3px',
                paddingBottom: '3px',
                paddingLeft: '10px',
                paddingRight: '10px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'rgb(76, 172, 255)',
            }}>
                <div className={styles.container}>
                    <ShootingStar className={styles.logo} onClick={home} />
                    <button className={styles.button} onClick={home}>Home</button>
                </div>
                <div className={styles.container}>
                    <button type='button' className={styles.button} onClick={login}>Login</button>
                    <button type='button' className={`${styles.button} ${styles.emphasis}`} onClick={register}>Register</button>
                </div>
            </form>
            <Login />
            <Register />
        </Fragment>
    )
}
