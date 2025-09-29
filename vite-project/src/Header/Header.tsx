import { useState } from 'react';

function Header({ currentTheme }) {
    const [themeBtn, setThemeBtn] = useState<any>("");
    const changeTheme = () => {
        setThemeBtn(prevState => !prevState);
    }


    return (
        <>
            <header className='flex justify-between w-full'>
                <div className='flex items-center gap-[0.75rem] w-full'>
                    <img
                        src={`${currentTheme.logoSrc}`}
                        alt="the logo of a company" />
                    <h2 className='text-preset-2 font-dm-sans font-semibold text-light-gray '>Character Counter</h2>
                </div>
                <button
                    onClick={changeTheme}
                    className='flex items-center justify-center w-[2.75rem] h-[2.75rem] bg-dark-gray rounded-[8px]'>
                    <img
                        src={themeBtn ? `${currentTheme.changeTheme[0]}` : `${currentTheme.changeTheme[1]}`}
                        alt=""
                        className='w-[1.375rem] h-[1.375rem]' />
                </button>
            </header>
        </>
    )
}

export default Header