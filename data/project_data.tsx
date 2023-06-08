export interface ProjectCardType {
	title: string
	description: JSX.Element | string
	dates: string
	stack: string[]
	github?: string
	demo?: string
}
export const PROJECT_DATA: ProjectCardType[] = [
    {
        title: 'OpenLink',
        description:
            <p>Interactive platform that leverages <strong>deep learning algorithms</strong> to pair software engineers with opportunities to contribute to meaningful <strong>open-source software</strong> (OSS) projects on Github.'</p>,
        dates: 'May 2023 - Present',
        stack: ['React', 'Typescript', 'Next.js', 'MongoDB', 'Go', 'AWS']
    },
    {
        title: 'ATOMIC',
        description:
            'A unique self-improvement system intended to improve one’s self-discipline and habit formation techniques. Applied domain knowledge from two psychology books on motivation theory into application’s architecture.',
        dates: 'May 2022 - Dec 2022',
        stack: ['React', 'Typescript', 'Redux', 'PostgreSQL', 'Supabase'],
        github: 'https://github.com/shiv-neel/atomic',
        demo: 'https://atomic-nine.vercel.app',
    },
    {
        title: 'Chess Engine',
        description:
            'A chess AI that implements a minimax algorithm to compute the best move in a chess position by searching up to five moves ahead.',
        dates: 'Jun 2022 - Aug 2022',
        stack: ['Python', 'Jupyter Notebook'],
        github: 'https://github.com/shiv-neel/chess-online',
    },
    {
        title: 'LiftLog',
        description:
            'A web app that helps you plan and log your exercises over time.',
        dates: 'May 2022 - Aug 2022',
        stack: ['Typescript', 'React', 'Redux', 'Supabase', 'PostgreSQL'],
        github: 'https://github.com/shiv-neel/exercise-planner',
    },
    {
        title: 'Playlist Tidier',
        description:
            'A web app that helps you clean and convert your Spotify playlists.',
        dates: 'Mar 2022 - Apr 2022',
        stack: ['Javascript', 'React', 'Node'],
        github: 'https://github.com/shiv-neel/playlist-tidier',
        demo: 'https://62098a5630f04fcd32739a48--spotify-playlist-tidier.netlify.app/',
    },
]