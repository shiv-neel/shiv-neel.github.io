import { Box, Button } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const SkillCard = ({ icon, title, href }) => {
	return (
		<Link href={href}>
			<a target={'_blank'}>
				<Box className='cursor-pointer flex items-center shadow-sm w-52 px-5 py-5 rounded-md gap-3 outline-1 text-lg hover:opacity-90 hover:shadow-lg duration-150 border-2'>
					{icon}
					{title}
				</Box>
			</a>
		</Link>
	)
}

export default SkillCard
