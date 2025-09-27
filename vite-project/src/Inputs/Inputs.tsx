import { useState } from "react";

import Check from './../assets/check.svg';

interface ButtonProps {
    id: string,
    label: string
}

interface TextareaProps {
    textarea: string,
    handleCharCount: () => void,
    trimChars: () => void
}

const Inputs: React.FC<TextareaProps> = ({ textarea, handleCharCount, trimChars }) => {

    const [checked, setChecked] = useState<Record<string, boolean>>({});
    const buttonArr: ButtonProps[] = [
        { id: 'exclude spaces', label: 'Exclude spaces' },
        { id: 'character limit', label: 'Character limit' }
    ]

    const handleChecked = (id: string) => {
        setChecked((prev) => ({
            ...prev,
            [id]: !prev[id], // toggle this specific button
        }));
    };

    const handleClick = () => {
        handleChecked(buttonArr[0].id);
        trimChars();
    }


    return (
        <div className='flex flex-col gap-[1rem]'>
            <textarea
                value={textarea}
                onChange={handleCharCount}
                placeholder="Start typing here… (or paste your text)"
                className='w-[61.875rem] h-[12.5rem] border-[2px] p-[1.25rem] border-medium-gray bg-off-black hover:bg-dark-gray rounded-[0.75rem] text-light-gray placeholder:text-light-gray focus:outline-medium-purple focus:shadow-[0_0_10px_0_var(--light-purple)]'
            />
            <div className='flex justify-between items-center h-[1.8125rem]'>
                <div className='flex gap-[1.5rem]'>
                    <div className="flex items-center gap-[0.62rem]">
                        <button
                            type="button"
                            name=""
                            id={buttonArr[0].id}
                            onClick={handleClick}
                            className="flex items-center justify-center w-[1rem] h-[1rem] border-[1px] border-white rounded-[0.25rem]"
                        >
                            <img
                                src={Check}
                                alt=""
                                className={`${checked[buttonArr[0].id] ? 'block' : 'hidden'}`}
                            />
                        </button>
                        <p className="text-light-gray">
                            {buttonArr[0].label}
                        </p>
                    </div>

                    <div className='flex gap-[0.62rem]'>

                        {/* a segunda checkbox aciona um input com a quantidade de caracters desejada pelo usuario */}
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

                        <input
                            type="number"
                            className={`text-light-gray w-[3.4375rem] h-[1.8125rem] pl-[0.75rem] pr-[0.75rem] pt-[0.25rem] pb-[0.25rem] rounded-[0.375rem] border-[1px] border-medium-gray focus:outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield] ${checked[buttonArr[1].id] ? 'block' : 'hidden'}`}
                        />
                    </div>
                </div>

                <p className="text-preset-4 text-light-gray">Approx. reading time: X minutes</p>
            </div>
        </div>
    )
}

export default Inputs;