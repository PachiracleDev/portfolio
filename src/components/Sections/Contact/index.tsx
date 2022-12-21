import { Formik, Form, Field } from 'formik';
import { MapPinIcon, UserIcon } from '@heroicons/react/24/outline'
import { UserIcon as UserIconSolid } from '@heroicons/react/24/solid'
import { AiOutlineMail } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { AiOutlineMessage, AiFillMessage } from 'react-icons/ai'
import { BsLinkedin, BsGithub, BsDiscord } from 'react-icons/bs'

import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'


function Contact() {
    const { t } = useTranslation('contact')
    return (
        <div className='mt-12 relative'>
            <div id="contact" className='absolute top-[-65px]' />
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
                    className='text-gray-400 tracking-wider lg:text-xl'>{t('subtitle')}</motion.p>
            </div>
            <div className='flex flex-col lg:flex-row gap-2 mx-auto max-w-6xl'>
                <div className='w-full'>

                    <Formik
                        initialValues={{ name: '', email: '', message: '' }}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values)
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                            <Form>
                                <div className='flex flex-col gap-2 p-2'>
                                    <div className='relative my-4 w-full'>
                                        <label className={`absolute text-gray-400 translate-y-[50%] left-3 px-1 pointer-events-none bg-dark  duration-300 ${values.name.length > 0 && 'translatey text-xs text-white '}`}>{t('label-name')}</label>
                                        <Field type='text' name="name" className='inputField' />
                                        {
                                            values.name.length > 0 ?
                                                <UserIconSolid className='absolute h-6 w-6 text-white top-3 right-3' />
                                                : <UserIcon className='absolute h-6 w-6 text-white top-3 right-3' />}

                                    </div>
                                    <div className='relative my-4 w-full'>
                                        <label className={`absolute text-gray-400 translate-y-[50%] left-3 px-1 pointer-events-none bg-dark  duration-300 ${values.email.length > 0 && 'translatey text-xs text-white '}`}>{t('label-email')}</label>
                                        <Field type='email' name="email" className='inputField' />
                                        {
                                            values.email.length > 0 ?
                                                <MdEmail className='absolute h-6 w-6 text-white top-3 right-3' />
                                                : <AiOutlineMail className='absolute h-6 w-6 text-white top-3 right-3' />}

                                    </div>
                                    <div className='relative my-4 w-full'>
                                        <label className={`absolute text-gray-400 translate-y-[50%] left-3 px-1 pointer-events-none bg-dark  duration-300 ${values.message.length > 0 && 'translatey text-xs text-white '}`}>{t('label-message')}</label>
                                        <Field
                                            as="textarea"
                                            name="message"
                                            className='w-full p-2 first-line:mr-12 bg-dark border rounded-md resize-none focus:outline-none focus:ring-0 bg-bg text-white'
                                            cols={30}
                                            rows={10} />
                                        {
                                            values.message.length > 0 ?
                                                <AiFillMessage className='absolute h-6 w-6 text-white top-3 right-3' />
                                                : <AiOutlineMessage className='absolute h-6 w-6 text-white top-3 right-3' />}

                                    </div>
                                    <div className='flex justify-end py-2 w-full'>
                                        <button type='submit' className='btn px-7 py-2 rounded-md shadow-md shadow-primary'>{t('button')}</button>
                                    </div>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>
                <div className='w-full h-full relative p-4'>

                    <p className='text-gray-400 text-lg indent-12'>
                        {t('comment')}
                    </p>

                    <div className='p-2'>
                        <h3 className='font-semibold text-white text-xl flex items-center gap-3 py-3'>
                            <MapPinIcon className='h-6 w-6 inline-block' />
                            {t('location')}
                        </h3>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <span className='text-gray-400'>{t('country')}:</span> <span className='text-white'>{t('country-rta')}</span>

                            </div>
                            <div>
                                <span className='text-gray-400'>{t('city')}:</span> <span className='text-white'>{t('city-rta')}</span>
                            </div>
                        </div>
                    </div>
                    <div className='items-center gap-4 flex text-xl pl-12 text-white absolute bottom-3 right-3'>
                        <BsLinkedin />
                        <BsGithub />
                        <BsDiscord />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact