import { Heading } from '@chakra-ui/react'
import React from 'react'

const Info = () => {
    return (
        <div className='mx-48 px-20'>
            <Heading as='h1' size='xl' className='flex py-20 mx-auto'>About this Website</Heading>
            <p>Made with Next.js, Typescript, TailwindCSS, ChakraUI, and FontAwesome Icons. AKA the best Frontend Tech Stack.</p>
        </div>
    )
}

export default Info
