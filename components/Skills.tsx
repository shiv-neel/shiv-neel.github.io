import { Box } from '@chakra-ui/react'
import React from 'react'
import { FaReact, FaRust } from 'react-icons/fa'
import {
	SiFirebase,
	SiGraphql,
	SiNextdotjs,
	SiPostgresql,
	SiPython,
	SiRedux,
	SiTypescript,
} from 'react-icons/si'
import SkillCard from './SkillCard'

const Skills = () => {
	return (
		<Box className='grid grid-cols-3 grid-rows-3 gap-5'>
			<SkillCard
				icon={<SiTypescript className='text-2xl text-blue-400' />}
				title='Typescript'
				href='https://www.typescriptlang.org/'
			/>
			<SkillCard
				icon={<FaReact className='text-2xl text-blue-500' />}
				title='ReactJS'
				href='https://www.reactjs.org/'
			/>
			<SkillCard
				icon={<SiNextdotjs className='text-2xl' />}
				title='NextJS'
				href='https://nextjs.org/'
			/>
			<SkillCard
				icon={<SiRedux className='text-2xl text-purple-500' />}
				title='Redux'
				href='https://redux.js.org/'
			/>
			<SkillCard
				icon={<SiGraphql className='text-2xl text-pink-400' />}
				title='GraphQL'
				href='https://graphql.org/'
			/>
			<SkillCard
				icon={<SiPostgresql className='text-2xl text-blue-600' />}
				title='PostgreSQL'
				href='https://www.postgresql.org/'
			/>
			<SkillCard
				icon={<SiFirebase className='text-2xl text-orange-500' />}
				title='Firebase'
				href='https://firebase.google.com/'
			/>
			<SkillCard
				icon={<SiPython className='text-2xl text-yellow-400' />}
				title='Python'
				href='https://www.python.org/'
			/>
			<SkillCard
				icon={<FaRust className='text-2xl text-orange-700' />}
				title='Rust'
				href='https://www.rust-lang.org/'
			/>
		</Box>
	)
}

export default Skills
