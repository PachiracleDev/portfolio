import classNames from 'classnames'
import type { ImageProps } from 'next/image'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'

import { useIsMounted } from '../../../utils/useIsMounted'


export type BannerProps = {
    title?: string
    subtitle?: string
    description?: string
    myname: string
    image: ImageProps['src']
    imageAlt?: string
}

export function Banner({
    title,
    subtitle,
    description,
    image,
    myname,
    imageAlt = "Banner's image",

}: BannerProps) {
    const [loaded, setLoaded] = useState(false)
    const isMounted = useIsMounted()

    const handleLoadingComplete = useCallback(
        () => (isMounted() ? setLoaded(true) : null),
        [isMounted]
    )

    return (
        <>
            <div
                className="relative flex gap-2 text-white h-96 xl:h-screen"
            >

                <div className='relative text-white w-full lg:w-1/3 xl:w-1/2'>
                    <Image
                        src={image}
                        alt={imageAlt}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className={classNames('transition-opacity duration-500 lg:object-right ', {
                            '!opacity-0': !loaded,
                        })}
                        priority={true}
                        onLoadingComplete={handleLoadingComplete}
                    />
                </div>

                <header className="absolute right-12 bottom-0 lg:text-right xl:bottom-1/3 flex flex-col justify-center p-6  text-shadow-medium gap-2 lg:gap-0 lg:flex-row lg:items-center lg:p-12">
                    <div
                        className='flex flex-col lg:items-end gap-2 lg:gap-4 w-full'
                    >
                        {myname && (
                            <motion.h5
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="text-xs font-bold leading-tight tracking-[4px] lg:text-xl text-gray-400"
                                dangerouslySetInnerHTML={{ __html: myname }}
                            />
                        )}
                        {title && (
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl text-white"
                                dangerouslySetInnerHTML={{ __html: title }}
                            />
                        )}
                        {subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="text-sm font-bold lg:text-3xl"
                                dangerouslySetInnerHTML={{ __html: subtitle }}
                            />
                        )}
                        {description && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className='w-full lg:w-3/5 font-bold text-gray-400'

                            >
                                {description}
                            </motion.p>
                        )}
                    </div>


                </header>
                <div
                    className='absolute bottom-0 right-0 bg-gradient-to-t from-white w-full h-1/3 lg:h-1/2 opacity-30'
                />
            </div>
        </>
    )
}
