import Logo from './../../starter files/character-counter/starter-code/assets/images/logo-dark-theme.svg';
import LogoWhite from './../../starter files/character-counter/starter-code/assets/images/logo-light-theme.svg'
import Sun from './../../starter files/character-counter/starter-code/assets/images/icon-sun.svg'
import Moon from './../../starter files/character-counter/starter-code/assets/images/icon-moon.svg'
import Chevron from './assets/check.svg'
import ChevronBlack from './assets/chevron-black.svg'



const themes = [
    {
        overallBg: 'bg-almost-black',
        LogoSrc: Logo,
        title: 'text-light-gray',
        changeBtn: Sun,
        changeBg: 'bg-dark-gray',
        mainHeading: 'text-off-white',
        textareaBg: 'bg-dark-gray',
        textareaBorder: 'border-medium-gray',
        textareaText: 'text-light-gray',
        textareaPlaceholder: 'placeholder:text-light-gray',
        checkboxes: 'border-basic-white',
        label: 'text-light-gray',
        inputBorder: 'border-dark-gray',
        headingLetter: 'text-light-gray',
        densityDescription: 'text-light-gray',
        letters: 'text-light-gray',
        emptyPercentage: 'bg-off-black',
        seeMore: 'text-light-gray',
        chevron: Chevron,
    },
    {
        overallBg: 'bg-basic-white',
        LogoSrc: LogoWhite,
        title: 'text-almost-black',
        changeBtn: Moon,
        changeBg: 'bg-off-white',
        mainHeading: 'text-almost-black',
        textareaBg: 'bg-off-white',
        textareaBorder: 'border-light-gray',
        textareaText: 'text-almost-black',
        textareaPlaceholder: 'placeholder:text-almost-black',
        checkboxes: 'border-almost-black',
        label: 'text-almost-black',
        inputBorder: 'border-almost-black',
        headingLetter: 'text-almost-black',
        densityDescription: 'text-almost-black',
        letters: 'text-almost-black',
        emptyPercentage: 'bg-off-white',
        seeMore: 'text-almost-black',
        chevron: ChevronBlack,
    }
]


export default themes;