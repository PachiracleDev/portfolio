import Header from '@components/Navigation/Header'
import Footer from '@components/Navigation/Footer'
import Overlay from '@components/Overlay'
import ModalMenu from '@components/Navigation/ModalMenu'
import Head from 'next/head'

type LayoutProp = {
    children: React.ReactNode
}


function Layout({ children }: LayoutProp) {
    return (
        <>
            <Head>
                <title>Patrick Postillos</title>
                <meta name="description" content="Patrick Postillos Portfolio" />
                <link rel="icon" href="https://res.cloudinary.com/gongian/image/upload/v1669146906/my-folder/fotos/icon_wf2dnw.jpg" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            {children}
            <Overlay />
            <ModalMenu />
            <Footer />
        </>
    )
}

export default Layout