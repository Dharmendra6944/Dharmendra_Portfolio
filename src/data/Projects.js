import Dharmendra_portfolio from '../assets/lil dragon.jpg'
import full_stack_notes from '../assets/fullstack_developer.jpg'
import spotify_clone from '../assets/spotify_app.jpg'

export const projects = [
    
    {
        id: 0,
        img: Dharmendra_portfolio,
        skills: ["Tailwind CSS", "React", "Javascript", "HTML", "CSS"],
        title: 'Dharmendra_portfolio',
        date: 'January 2023 - present',
        desc: 'A portfolio app detailing & describing about me. Basically a resume converted into website.',
        live: "https://github.com/Dharmendra6944",
        github: 'https://github.com/Dharmendra6944',
    },
    {
        id: 1,
        img: full_stack_notes,
        skills: ["Java", "DSA", "Javascript", "MERN", "Kotlin"],
        title: 'Fullstack_developer ',
        date: 'june 2022 - Present',
        desc: 'A repo you need for Programming & Problem Solving. This is contains everthing you need to be full stack web developer with DSA.',
        live: 'https://github.com/Dharmendra6944',
        github: 'https://github.com/Dharmendra6944'
    },
    {
        id: 2,
        img: spotify_clone,
        skills: ["Tailwind CSS", "React", "React Icons", "Vite", "NPM"],
        title: 'Spotify Clone',
        date: 'February 2024 - February 2024',
        desc: 'Home and Search pages of Spotify. This was an assignment given during job hunting. Remember, many functionalities will not work, as it is just a frontend Tailwind CSS implementation.',
        live: 'https://open.spotify.com/',
        github: 'https://github.com/Dharmendra6944'
    }
]