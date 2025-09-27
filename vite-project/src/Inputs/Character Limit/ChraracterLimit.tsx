import React from 'react'

import Check from './../../assets/check.svg';

interface ButtonProps {
    id: string,
    label: string
}

interface SomeProps {
    buttonArr: ButtonProps[];
    handleChecked: (id: string) => void,
    checked: Record<string, boolean>
}

const ChraracterLimit:React.FC<SomeProps> = ({ buttonArr, handleChecked, checked }) => {
    return (
        <div className="flex items-center gap-[0.62rem]">
            <button
                type="button"
                name=""
                id={buttonArr[1].id}
                onClick={() => handleChecked(buttonArr[1].id)}
                className="flex items-center justify-center w-[1rem] h-[1rem] border-[1px] border-white rounded-[0.25rem]"
            >
                <img
                    src={Check}
                    alt=""
                    className={`${checked[buttonArr[1].id] ? 'block' : 'hidden'}`}
                />
            </button>
            <p className="text-light-gray">
                Set Character Limit
            </p>
        </div>
    )
}

export default ChraracterLimit