import { useState } from 'react'
import { Bars2Icon, GlobeAltIcon } from '@heroicons/react/24/outline'
import LogoName from './LogoName'
import { useContextStore } from '@store'
import { BsLinkedin, BsGithub, BsDiscord } from 'react-icons/bs'
import classNames from 'classnames'
import LenguageBtn from './MenuLanguage'
import { Link } from 'react-scroll'
import NextLink from 'next/link'
import NotifyDiscord from './NotifyDiscord'
import { useTranslation } from 'next-i18next'

function Header() {
    const { dispatch } = useContextStore() as any;
    const [isOpen, setIsOpen] = useState(false)
    const openDialog = () => {
        // copy to clipboard the discord link
        navigator.clipboard.writeText('PachiOne#8404')
        setIsOpen(true)
        const interval = setTimeout(() => {
            setIsOpen(false)
        }, 4000)
        return () => clearTimeout(interval)
    }

    const { t } = useTranslation('common')


    return (
        <>
            <div className='flex justify-between px-2 text-white sticky top-0 bg-dark z-40'>
                <div className='cursor-pointer'>
                    <LogoName />
                </div>

                <div className='items-center hidden gap-12 lg:flex pl-12'>
                    <Link className="link" to="home" spy={true} smooth={true} duration={500} >
                        {t('home')}
                    </Link>
                    <Link className="link" to="skills" spy={true} smooth={true} duration={500}   >
                        {t('skills')}
                    </Link>
                    <Link className="link" to="projects" spy={true} smooth={true} duration={500}   >
                        {t('projects')}
                    </Link>
                    <Link className="link" to="contact" spy={true} smooth={true} duration={500}   >
                        {t('contact')}
                    </Link>
                </div>

                <div className='items-center gap-4 hidden lg:flex text-2xl pl-12'>
                    <NextLink target="_blank" rel="noreferrer" href="https://github.com/PachiracleDev">
                        <BsGithub />
                    </NextLink>
                    <NextLink target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pachiracle-dev-601750252/">
                        <BsLinkedin />
                    </NextLink>
                    <div className='cursor-pointer relative flex items-center gap-2' onClick={openDialog}>
                        <BsDiscord onClick={openDialog} />
                        <div className='absolute bottom-[-40px]'>
                            {isOpen && <NotifyDiscord />}
                        </div>
                    </div>
                </div>
                <div className='items-center gap-4 hidden lg:flex pr-12'>
                    <LenguageBtn />
                </div>

                <div onClick={() => dispatch({
                    isModalMenuOpen: true,
                    isOverlayOpen: true,
                })} className='flex lg:hidden items-center focus:border-gray-300 text-sm gap-2 cursor-pointer hover:text-slate-300 transition-colors duration-300'>
                    <span>MENU</span>
                    <Bars2Icon className='h-7 w-7' />
                </div>
            </div>
            <div
                className='absolute bottom-[-210px] z-30 right-0 bg-gradient-to-t from-white w-full opacity-30'
            />
        </>
    )
}

export default Header