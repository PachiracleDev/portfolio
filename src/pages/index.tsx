import Layout from '../layout'
import Skills from '../components/Sections/Skills'
import Projects from '@components/Sections/Projects'
import Contact from '@components/Sections/Contact'
import Main from '@components/Sections/Main'

import fs from 'fs'
import path from 'path'

import { SkillType } from '../components/Sections/Skills/Skill'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export type PropsStatic = {
  skillsLocale: Omit<SkillType, "descripcion">[]
}


export const getStaticProps: GetStaticProps<PropsStatic> = async ({ locale }) => {
  const allSkillsRead = fs.readFileSync(path.join(process.cwd(), '/src/skills.json'), 'utf8').toString()
  const allSkills = JSON.parse(allSkillsRead) as SkillType[]
  const i18nConfig = await serverSideTranslations(locale!)

  const skillsLocale = allSkills.map((skill) => {
    if (locale === 'es') {
      return {
        id: skill.id,
        skill: skill.skill,
        image: skill.image,
        description: skill.descripcion, // <--- English description
        link: skill.link
      }
    }
    return {
      id: skill.id,
      skill: skill.skill,
      image: skill.image,
      description: skill.description, // <--- Spanish description
      link: skill.link
    }
  })
  return {
    props: {
      skillsLocale,
      ...i18nConfig
    }
  }

}



export default function Home({ skillsLocale }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Main />
      <div className='px-2 mb-4'>
        <Skills skillsLocale={skillsLocale} />
        <Projects />
        <Contact />
      </div>

    </Layout>
  )
}
