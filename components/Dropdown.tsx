import { Box, IconButton, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BsHouse, BsPerson, BsPuzzle, BsSun } from 'react-icons/bs'
import { CgHome, CgLaptop, CgTrello, CgUser } from 'react-icons/cg'
import { FaRegPaperPlane } from 'react-icons/fa'
import { HiOutlineViewList } from 'react-icons/hi'
import { MdOutlineDarkMode } from 'react-icons/md'
import Logo from './Logo'

interface dropDownProp {
	// specifies types of props
	showDropdown: boolean
}

const Dropdown: React.FC<dropDownProp> = ({ showDropdown }) => {
	const router = useRouter()
	const inactive =
		'transition duration-200 hover:scale-110 hover:text-blue-500 hover:font-bold z-50'
	const active = 'text-blue-500 font-bold z-50'
	const offsets = [30, 106, 182, 258]
	const pathnames = {
		'/': 0,
		'/about': 1,
		'/resume': 2,
		'/projects': 3,
	}

	if (showDropdown)
		return (
			<Box className='menu-dropdown'>
				<ul className='flex justify-center items-center gap-10'>
					<motion.div
						animate={{ x: offsets[pathnames[router.pathname]] }}
					>
						<Box
							className='w-14 h-14 p-2 rounded-md cursor-pointer absolute z-1 -bottom-7 shadow-xl'
							bgColor='#000000'
						></Box>
					</motion.div>
					<li className={router.pathname === '/' ? active : inactive}>
						<Link href='/'>
							<a className='flex items-center gap-2'>
								<CgHome className='text-4xl' />
							</a>
						</Link>
					</li>
					<li className={router.pathname === '/about' ? active : inactive}>
						<Link href='/about'>
							<a className='flex items-center gap-2'>
								<CgUser className='text-4xl' />
							</a>
						</Link>
					</li>{' '}
					<li className={router.pathname === '/resume' ? active : inactive}>
						<Link href='/resume'>
							<a className='flex items-center gap-2'>
								<CgLaptop className='text-4xl' />
							</a>
						</Link>
					</li>
					<li className={router.pathname === '/projects' ? active : inactive}>
						<Link href='/projects'>
							<a className='flex items-center gap-2'>
								<CgTrello className='text-4xl' />
							</a>
						</Link>
					</li>
				</ul>
			</Box>
		)
	else return <></>
}

export default Dropdown
