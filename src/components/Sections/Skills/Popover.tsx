import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { SkillType } from './Skill'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'next-i18next'

type infoTechProp = {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    skillItem: Omit<SkillType, "descripcion">
}


export default function InfoTech({ isOpen, setIsOpen, skillItem }: infoTechProp) {
    function closeModal() {
        setIsOpen(false)
    }
    const { t } = useTranslation('skills')

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md relative transform overflow-hidden rounded-2xl bg-dark p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-white"
                                    >
                                        {skillItem.skill}
                                    </Dialog.Title>
                                    <div className='absolute right-4 top-3   cursor-pointer' onClick={closeModal}>
                                        <XMarkIcon className='h-6 w-6 text-white' />
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-400">
                                            {skillItem.description}
                                        </p>
                                    </div>

                                    <div className="mt-4 flex justify-end">
                                        <Link
                                            href={skillItem.link}
                                            passHref
                                            target="_blank"
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent btn px-4 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:hidden"
                                            onClick={closeModal}
                                        >
                                            {t('btn-doc')}
                                        </Link>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
