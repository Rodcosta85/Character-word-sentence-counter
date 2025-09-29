interface ThemeProps {
    logoSrc: any,
    changeBtn: any,
    changeBg: string,
    title: string
}

interface HeaderProps {
    currentTheme: ThemeProps,
    handleChangeTheme: () => void
}

const Header:React.FC<HeaderProps>= ({ currentTheme, handleChangeTheme}) => {

    return (
        <>
            <header className='flex justify-between w-full'>
                <div className='flex items-center gap-[0.75rem] w-full'>
                    <img
                        src={`${currentTheme.logoSrc}`}
                        alt="the logo of a company" 
                    />
                    <h2 className={`text-preset-2 ${currentTheme.title} font-dm-sans font-semibold`}>Character Counter</h2>
                </div>
                <button
                    onClick={handleChangeTheme}
                    className={`flex items-center justify-center w-[2.75rem] h-[2.75rem] ${currentTheme.changeBg} rounded-[8px]`}>
                    <img
                        src={`${currentTheme.changeBtn}`}
                        alt=""
                        className='w-[1.375rem] h-[1.375rem]' 
                    />
                </button>
            </header>
        </>
    )
}

export default Header