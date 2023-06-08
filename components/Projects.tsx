import { Box } from '@chakra-ui/react'
import React from 'react'
import { PROJECT_DATA } from '../data/project_data'
import ProjectCard from './ProjectCard'



const Projects = () => {
	
	return (
		<Box>
			{PROJECT_DATA.map((project, index) => (
				<ProjectCard key={index} {...project} />
			))}
		</Box>
	)
}

export default Projects
