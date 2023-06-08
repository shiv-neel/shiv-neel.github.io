import { Box, useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout: React.FC = ({ children }) => {
	const { colorMode } = useColorMode()
	return (
		<Box
			className='w-full min-h-screen min-w-fit'
			backgroundColor={colorMode === 'dark' ? '#111112' : '#EEEEEF'}
		>
			<Box className='flex flex-col mx-auto'>
				<Navbar />
				<Box className='flex flex-1'>{children}</Box>
				{/* <Footer /> */}
			</Box>
		</Box>
	)
}

export default Layout
