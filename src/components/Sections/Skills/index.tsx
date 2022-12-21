import React from 'react'
import { motion } from 'framer-motion'
import { InferGetStaticPropsType } from 'next'
import { PropsStatic } from '../../../pages/index'
import Skill from './Skill'
import { useTranslation } from 'next-i18next'


function Skills({ skillsLocale }: PropsStatic) {
    const { t } = useTranslation("skills")
    return (
        <div className='mt-2 relative'>
            <div id="skills" className='absolute top-[-65px]' />
            <div className='p-3 lg:text-center'>
                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className='text-2xl font-semibold lg:text-4xl'>
                    {t('title')}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}

                    className='text-gray-400 tracking-wider pl-4 lg:text-xl'> {t('subtitle')}</motion.p>
            </div>

            <div className='flex flex-wrap justify-center gap-2 max-w-6xl mx-auto'>
                {skillsLocale && skillsLocale && skillsLocale.map((skill) => (
                    <Skill skill={skill} key={skill.id} />
                ))}

            </div>
        </div >
    )
}

export default Skills