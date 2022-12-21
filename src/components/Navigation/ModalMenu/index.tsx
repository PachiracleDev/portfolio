import { useState } from 'react'
import { useContextStore } from '@store'
import classNames from 'classnames'
import { Link } from 'react-scroll'
import NextLink from 'next/link'
import { BsGithub, BsLinkedin, BsDiscord } from 'react-icons/bs'
import { useLockedBody } from '../../../utils/useLockerdBody'
import { XMarkIcon, Bars2Icon } from '@heroicons/react/24/outline'
import LenguageBtn from '../Header/MenuLanguage'

function ModalMenu() {
    const { state, dispatch } = useContextStore() as any

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

    const cn = classNames('ModalMenu', {
        'ModalMenuActivate': state.isModalMenuOpen,
    })
    useLockedBody(state.isModalMenuOpen)

    const closeMenu = () => {
        dispatch({
            isModalMenuOpen: false,
            isOverlayOpen: false,
        })
    }

    return (
        <div
            className={cn}
        >
            <div className='flex justify-between items-center py-4 w-full mb-12'>
                <h6 className='font-bold text-xl flex gap-2 items-center'>
                    <Bars2Icon className='h-7 w-7' />
                    MENU
                </h6>
                <XMarkIcon onClick={closeMenu} className='h-7 w-7 cursor-pointer' />
            </div>
            <div className='flex flex-col justify-center gap-4 '>
                <Link onClick={closeMenu} className="link" to="home" spy={true} smooth={true} duration={500} >
                    HOME
                </Link>
                <Link onClick={closeMenu} className="link" to="skills" spy={true} smooth={true} duration={500}   >
                    SKILLS
                </Link>
                <Link onClick={closeMenu} className="link" to="projects" spy={true} smooth={true} duration={500}   >
                    PROJECTS
                </Link>
                <Link onClick={closeMenu} className="link" to="contact" spy={true} smooth={true} duration={500}   >
                    CONTACT ME
                </Link>
            </div>
            <div className='flex justify-end w-full my-12 tems-center gap-6 text-2xl'>

                <NextLink target="_blank" rel="noreferrer" href="https://github.com/PachiracleDev">
                    <BsGithub />
                </NextLink>
                <NextLink target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pachiracle-dev-601750252/">
                    <BsLinkedin />
                </NextLink>
                <div className='cursor-pointer relative flex items-center gap-2' onClick={openDialog}>
                    <BsDiscord onClick={openDialog} />
                    <div className='absolute bottom-[-40px] right-0'>
                        {isOpen && (
                            <div>
                                <p className='text-white bg-black text-xs p-2 rounded-md'>Copied!</p>
                            </div>
                        )

                        }
                    </div>
                </div>


            </div>
            <div className='items-center flex justify-center mx-auto'>
                <LenguageBtn text="Lenguage" />
            </div>
        </div>
    )
}

export default ModalMenu