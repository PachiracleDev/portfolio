import React from 'react'
import { Banner } from './Banner'

import imageHome from '../../../public/fotos/home.png'
import { useTranslation } from 'next-i18next'

function Home() {
    const { t } = useTranslation(['home'])

    return (
        <div className='relative'>
            <div id="home" className='absolute top-[-65px]' />
            <Banner
                myname='Patrick Postillos'
                title={t('title') as string}
                description={t('description') as string}
                subtitle={t('subtitle') as string}
                imageAlt='Patrick Postillos'
                image={imageHome}
            />
        </div>
    )
}

export default Home