import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Box, IconButton, useColorMode } from '@chakra-ui/react'
import { CgFileDocument, CgHome, CgLaptop, CgMenu, CgMoon, CgSun, CgTrello, CgUser } from 'react-icons/cg'
import { MdOutlineDarkMode } from 'react-icons/md'
import Logo from './Logo'
import { useRouter } from 'next/router'
import Dropdown from './Dropdown'
import { motion } from 'framer-motion'

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const router = useRouter()
	const inactive =
		'transition duration-200 hover:scale-150 hover:text-blue-500 hover:font-bold z-50'
	const active = 'text-blue-500 font-bold z-50'

	const [showDropdown, toggleDropdown] = useState<boolean>(false)
	const [mounted, setMounted] = useState<boolean>(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const offsets = [34, 102, 170, 238]
	const pathnames = {
		'/': 0,
		'/about': 1,
		'/resume': 2,
		'/projects': 3,
	}

	return (
		mounted && (
			<nav className='w-full'>
				<ul className='mx-10 top-0 flex lg:justify-end sm:justify-center items-center gap-12 pt-10 pb-5'>
					<li className='flex mr-auto'>
						<Logo />
					</li>
					<motion.div
						animate={{ x: offsets[pathnames[router.pathname]] }}
						className='invisible md:visible'
					>
						<Box
							className='w-12 h-12 p-2 rounded-md cursor-pointer absolute z-1 -bottom-6 shadow-xl'
							bgColor={colorMode === 'light' ? 'white' : 'black'}
						></Box>
					</motion.div>
					<li className={router.pathname === '/' ? active : inactive}>
						<Link href='/'>
							<a className='flex items-center  gap-2 navbar-link'>
								<CgHome className='text-xl' />
							</a>
						</Link>
					</li>
					<li className={router.pathname === '/about' ? active : inactive}>
						<Link href='/about'>
							<a className='flex items-center  gap-2 navbar-link'>
								<CgUser className='text-xl' />
							</a>
						</Link>
					</li>{' '}
					<li className={router.pathname === '/resume' ? active : inactive}>
						<Link href='/resume'>
							<a className='flex items-center gap-2 navbar-link'>
								<CgFileDocument className='text-xl' />
							</a>
						</Link>
					</li>
					<li className={router.pathname === '/projects' ? active : inactive}>
						<Link href='/projects'>
							<a className='flex items-center  gap-2 navbar-link'>
								<CgTrello className='text-xl' />
							</a>
						</Link>
					</li>
					<li
						className='navbar-toggle shadow-lg rounded-lg'
						onClick={() => toggleDropdown((dropdown) => !dropdown)}
					>
						<IconButton
						colorScheme={'messenger'}
							aria-label='menu dropdown'
							icon={
								<CgMenu className='text-2xl cursor-pointer' />
							}
						/>
					</li>
					<li className='shadow-lg rounded-lg right-0'>
						<IconButton
						colorScheme={'messenger'}
							aria-label='dark mode button'
							style={{ fontSize: 20 }}
							onClick={toggleColorMode}
							icon={colorMode === 'dark' ? <CgMoon /> : <CgSun />}
						/>
					</li>
				</ul>
				<Dropdown showDropdown={showDropdown} />
			</nav>
		)
	)
}

export default Navbar
