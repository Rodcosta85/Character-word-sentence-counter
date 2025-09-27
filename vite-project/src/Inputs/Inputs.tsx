import { useState } from "react";

// imagem
import Exclamation from './../assets/info-circle.png';

// componentes filhos
import ExcludeSpaces from "./Exclude Spaces/ExcludeSpaces";
import ChraracterLimit from "./Character Limit/ChraracterLimit";

// props do array do buttonArr
interface ButtonProps {
    id: string,
    label: string
}

// props que utilizei nesse componente e nos componentes filhos
interface TextareaProps {
    textarea: string,
    charsWithoutSpaces: string,
    handleCharCount: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    trimChars: () => void,
    checked: Record<string, boolean>
    buttonArr: ButtonProps[];
    handleChecked: (id: string) => void;
}

const Inputs: React.FC<TextareaProps> = ({ textarea, charsWithoutSpaces, handleCharCount, trimChars, checked, buttonArr, handleChecked }) => {

    const [limit, setLimit] = useState<string>('300');
    const [limitPassed, setLimitPassed] = useState<boolean>(false);
    const handleCharLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLimit(e.target.value);
        setLimitPassed(true);
    }
    const limitNum = Number(limit);
    const charsWithoutSpacesNum = Number(charsWithoutSpaces);
    const comparisonLimit = charsWithoutSpacesNum > limitNum;

    // função que une a função de marcar a "checkbox" com a de cortar os espaços da textarea/string
    const handleClick = () => {
        handleChecked(buttonArr[0].id);
        trimChars();
    }

    const inputNumberStyles = 'text-light-gray w-[3.4375rem] h-[1.8125rem] pl-[0.75rem] pr-[0.75rem] pt-[0.25rem] pb-[0.25rem] rounded-[0.375rem] border-[1px] border-medium-gray focus:outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]'
    const textareaStyles = 'w-[61.875rem] h-[12.5rem] border-[2px] p-[1.25rem] border-medium-gray bg-off-black hover:bg-dark-gray rounded-[0.75rem] text-light-gray placeholder:text-light-gray focus:shadow-[0_0_10px_0_var(--light-purple)]'


    return (
        <div className='flex flex-col gap-[1rem]'>
            <div className='flex flex-col gap-[0.75rem]'>
                <textarea
                    value={textarea}
                    onChange={handleCharCount}
                    placeholder="Start typing here… (or paste your text)"
                    className={`${textareaStyles} ${comparisonLimit ? 'outline-light-red' : 'focus:outline-medium-purple'}`}
                />
                <div className={`${comparisonLimit ? 'flex' : 'hidden'} items-center gap-[0.5rem]`}>
                    <img src={Exclamation} alt="" />
                    <p className="text-preset-4 text-light-red">Limit reached! Your text exceeds {limitNum} characters.</p>
                </div>
            </div>

            <div className='flex justify-between items-center h-[1.8125rem]'>
                <div className='flex gap-[1.5rem]'>
                    {/* primeira checkbox - a que corta os espaços */}
                    <ExcludeSpaces
                        buttonArr={buttonArr}
                        handleClick={handleClick}
                        checked={checked}
                    />
                    <div className='flex gap-[0.62rem]'>
                        {/* a segunda checkbox aciona um input com a quantidade de caracters desejada pelo usuario */}
                        <ChraracterLimit
                            buttonArr={buttonArr}
                            handleChecked={handleChecked}
                            checked={checked}
                        />
                        <input
                            type="text"
                            onChange={handleCharLimit}
                            value={limit}
                            className={`${inputNumberStyles} ${checked[buttonArr[1].id] ? 'block' : 'hidden'}`}
                        />
                    </div>
                </div>
                <p className="text-preset-4 text-light-gray">Approx. reading time: X minutes</p>
            </div>
        </div>
    )
}

export default Inputs;