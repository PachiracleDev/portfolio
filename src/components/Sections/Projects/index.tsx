import React from 'react'
import projectImage from '../../../public/fotos/project.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'

function Projects() {
    const { t } = useTranslation('projects')
    return (
        <div className='mt-12 relative'>
            <div id="projects" className='absolute top-[-65px]' />
            <div className='border-t max-w-5xl mx-auto' />
            <div className='p-3 lg:text-center'>
                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className='text-2xl lg:text-4xl font-semibold '>
                    {t('title')}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='text-gray-400 tracking-wider lg:text-xl'> {t('subtitle')}</motion.p>
            </div>
            <div className='flex flex-wrap justify-center gap-2'>
                <div className='max-w-xl relative'>
                    <div className='inset-0 absolute hover:bg-black hover:bg-opacity-50 z-10 cursor-pointer capa' />
                    <span className='absolute tracking-[10px] text-gray-400 top-3 left-6'>2022</span>
                    <h3 className='text-xl font-semibold absolute text-black top-8 left-5 lg:text-2xl'>Gongian</h3>
                    <Image src={projectImage} alt='project' />
                </div>
                <div className='max-w-xl relative'>
                    <div className='inset-0 absolute hover:bg-black hover:bg-opacity-50 z-10 cursor-pointer capa' />
                    <span className='absolute tracking-[10px] text-gray-400 top-3 left-6'>2022</span>
                    <h3 className='text-xl font-semibold absolute text-black top-8 left-5 lg:text-2xl'>Gongian</h3>
                    <Image src={projectImage} alt='project' />
                </div>
                <div className='max-w-xl relative'>
                    <div className='inset-0 absolute hover:bg-black hover:bg-opacity-50 z-10 cursor-pointer capa' />
                    <span className='absolute tracking-[10px] text-gray-400 top-3 left-6'>2022</span>
                    <h3 className='text-xl font-semibold absolute text-black top-8 left-5 lg:text-2xl'>Gongian</h3>
                    <Image src={projectImage} alt='project' />
                </div>
                <div className='max-w-xl relative'>
                    <div className='inset-0 absolute hover:bg-black hover:bg-opacity-50 z-10 cursor-pointer capa' />
                    <span className='absolute tracking-[10px] text-gray-400 top-3 left-6'>2022</span>
                    <h3 className='text-xl font-semibold absolute text-black top-8 left-5 lg:text-2xl'>Gongian</h3>
                    <Image src={projectImage} alt='project' />
                </div>
            </div>
        </div>
    )
}

export default Projects