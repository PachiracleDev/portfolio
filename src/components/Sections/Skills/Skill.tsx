import { useState } from 'react'
import Image from 'next/image'
import Popover from './Popover'

export type SkillType = {
    id: number
    skill: string
    image: string
    description: string
    descripcion: string
    link: string
}

export type SkillProp = {
    skill: Omit<SkillType, "descripcion">
}


function Skill({ skill }: SkillProp) {

    let [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className='flex gap-2 cursor-pointer rounded-md p-2 hover:bg-black hover:scale-110 transition-all duration-500' onClick={() => setIsOpen(true)} >
                <div className='flex flex-col justify-center items-center'>
                    <Image
                        src={skill.image}
                        alt={skill.skill}
                        width={100}
                        height={100}

                    />
                    <strong className='text-sm font-semibold'>
                        {skill.skill}
                    </strong>
                </div>
            </div>
            <Popover isOpen={isOpen} setIsOpen={setIsOpen} skillItem={skill} />
        </>
    )
}

export default Skill