import { Box, Divider, Heading } from '@chakra-ui/react'
import React from 'react'
import { CgTrello } from 'react-icons/cg'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Portfolio = () => {
	return (
		<Box className='md:mt-28 mt-14 px-20 justify-center mx-auto max-w-5xl'>
			<Heading
				as='h1'
				size='xl'
				className='flex mx-auto mb-6 items-center gap-3'
			>
				<CgTrello />
				Personal Projects
			</Heading>
			<Box>
				<Projects />
			</Box>
			<Heading as='h1' size='xl' className='flex mx-auto mb-12'>
				Tech Stack
			</Heading>
			<Box className='flex justify-center'>
				<Skills />
			</Box>
			<Divider className='my-12' />
		</Box>
	)
}

export default Portfolio
