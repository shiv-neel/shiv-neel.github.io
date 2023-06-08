import { extendTheme } from '@chakra-ui/react'
import '@fontsource/inter'

const configTheme = extendTheme({
	fonts: {
		heading: 'Inter, sans-serif',
		body: 'Inter, sans-serif',
	},
	colors: {
		bg: { 'dark': 'black' },
	},
})

export default configTheme