import Logo from './assets/logo.png';
import LogoWhite from './assets/Logo-white.png'
import Sun from './assets/Sun Icon.svg'
import Moon from './assets/moon-02.svg'

const themes = [
    {
        overallBg: 'bg-almost-black',
        LogoSrc: Logo,
        title: 'text-light-gray',
        changeTheme: Sun,
        mainHeading: 'text-off-white',
        textareaBg: 'bg-dark-gray',
        textareaBorder: 'border-medium-gray',
        textareaText: 'text-light-gray',
        checkboxes: 'border-basic-white',
        label: 'text-light-gray',
        headingLetter: 'text-light-gray',
        letters: 'text-light-gray',
        emptyPercentage: 'bg-off-black',
        seeMore: 'text-light-gray'
    },
    {
        overallBg: 'bg-basic-white',
        LogoSrc: LogoWhite,
        title: 'text-almost-black',
        changeTheme: Moon,
        mainHeading: 'text-almost-black',
        textareaBg: 'bg-off-white',
        textareaBorder: 'border-light-gray',
        textareaText: 'text-almost-black',
        checkboxes: 'border-almost-black',
        label: 'text-almost-black',
        headingLetter: 'text-almost-black',
        letters: 'text-almost-black',
        emptyPercentage: 'bg-off-white',
        seeMore: 'text-almost-black'
    }
]


export default themes;