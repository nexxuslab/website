import Head from 'next/head'

import { FunctionComponent, Fragment, useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { Metadata } from 'next'

import './globals.css'

import { Navbar as GuestNavbar } from 'components/navbars/guest'
import { Navbar as AdminNavbar } from 'components/navbars/admin'
import { Navbar as MemberNavbar } from 'components/navbars/member'

import { http } from 'utils/http'
import { UserRoles } from 'utils/enum'

const metadata: Metadata = {
    title: 'Dynamic Website Frontend',
    description: 'A dynamic website frontend',
}

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    const [ verified, setVerified ] = useState<UserRoles>(UserRoles.guest)

    let navbar: JSX.Element = <GuestNavbar />

    useEffect(() => {
        switch (verified) {
            case UserRoles.member:
                navbar = <MemberNavbar />
                break
            case UserRoles.admin:
                navbar = <AdminNavbar />
                break
            default:
                navbar = <GuestNavbar />
        }
    }, [verified])

    useEffect(() => {
        const verify = async () => {
            try {
                const response = await http.get('v1/users/verify')

                setVerified(response.data.user!.role)
            } catch (error) {}
        }

        verify()
    }, [])

    return (
        <Fragment>
            <Head>
                <title>{String(metadata.title)}</title>
                <meta name="description" content={metadata.description!} />
            </Head>
            {navbar}
            <Component {...pageProps} />
        </Fragment>
    )
}

export default App
