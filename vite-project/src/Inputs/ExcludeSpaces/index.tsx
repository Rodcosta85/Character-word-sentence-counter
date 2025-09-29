import React from 'react'
import Check from './../../assets/check.svg';
import themes from '../../themes';

interface ButtonProps {
    id: string,
    label: string
}

interface SomeProps {
    buttonArr: ButtonProps[];
    handleClick: () => void,
    checked: Record<string, boolean>
    currentTheme: Partial<typeof themes[0]>;
}

const ExcludeSpaces:React.FC<SomeProps> = ({ buttonArr, handleClick, checked, currentTheme }) => {
    return (
        <div className="flex items-center gap-[0.62rem]">
            <button
                type="button"
                name=""
                id={buttonArr[0].id}
                onClick={handleClick}
                className={`flex items-center justify-center w-[1rem] h-[1rem] border-[1px] ${currentTheme.checkboxes} rounded-[0.25rem]`}
            >
                <img
                    src={Check}
                    alt=""
                    className={`${checked[buttonArr[0].id] ? 'block' : 'hidden'}`}
                />
            </button>
            <p className={`${currentTheme.label}`}>
                {buttonArr[0].label}
            </p>
        </div>
    )
}

export default ExcludeSpaces