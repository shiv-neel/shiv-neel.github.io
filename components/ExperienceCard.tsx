import { Badge, Box, Button, Divider, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BsFillEyeFill, BsGithub } from 'react-icons/bs'

interface ExperienceCardType {
	title: string
	subtitle: string
	location: string
	description: any
	dates: string
	stack: string[]
}

const ExperienceCard: React.FC<ExperienceCardType> = ({
	title,
	subtitle,
	location,
	description,
	dates,
	stack,
}) => {
	const BadgeColors = {
		React: 'cyan',
		Dart: 'blue',
		Redux: 'purple',
		Kotlin: 'purple',
		Typescript: 'blue',
		Python: 'yellow',
		PostgreSQL: 'blue',
		Node: 'green',
		Graphql: 'pink',
		Firebase: 'orange',
		Supabase: 'green',
		Javascript: 'yellow',
		TensorFlow: 'red',
		NumPy: 'green',
		'Jupyter Notebook': 'orange',
		Go: 'blue',
	}

	return (
		<Box className='mb-8'>
			<Box className='flex items-center gap-10 w-full'>
				<p className='text-2xl font-semibold mb-5'>{title}</p>
			</Box>

			<p className='text-lg font-semibold mb-2'>{subtitle}</p>
			<p className='mb-2 flex justify-between'>
				<p className='text-gray-400'>{dates}</p>
				<p className='text-gray-400'>{location}</p>
			</p>
			{description}
			<Box className='flex gap-3 my-5 ml-auto flex-wrap justify-start'>
				{stack.map((s: string, index: number) => (
					<Badge
						colorScheme={BadgeColors[s as keyof typeof BadgeColors]}
						key={index}
						px={2}
						py={1}
						rounded='full'
					>
						{s}
					</Badge>
				))}
			</Box>
		</Box>
	)
}

export default ExperienceCard
