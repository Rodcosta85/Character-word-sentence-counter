import { useState } from 'react'
import Chevron from '../assets/chevron.svg'

interface ThemeProps {
    headingLetter: string,
    densityDescription: string,
    letters: string,
    emptyPercentage: string,
    seeMore: string,
    chevron: any
}

interface TextareaProps {
    textarea: string,
    charCount?: number,
    charsWithoutSpaces: string,
    currentTheme: ThemeProps
}

const LetterDensity: React.FC<TextareaProps> = ({ textarea, charsWithoutSpaces, currentTheme }) => {

    const getLetterFrequencies = (text: string): Record<string, number> => {
        const counts: Record<string, number> = {};
        for (const char of text) {
            if (/[a-z]/i.test(char)) {
                const lower = char.toLowerCase();
                counts[lower] = (counts[lower] || 0) + 1;
            }
        }
        return counts;
    };

    const charsWithoutSpacesNum = Number(charsWithoutSpaces);
    const frequencies = getLetterFrequencies(textarea);
    const sortedPercentages =
        Object.entries(frequencies).map(([letter, count]) => ({
            letter,
            count,
            percentage: (count / charsWithoutSpacesNum) * 100

        })).sort((a, b) => b.count - a.count);

    const [toggle, setToggle] = useState<boolean>(false);
    const handleToggle = () => {
        setToggle(prevState => !prevState);
    }

    return (
        <div className='flex flex-col justify-start gap-[1.25rem] w-full'>
            <h2 className={`'text-preset-2 font-semibold ${currentTheme.headingLetter} font-dmsans'`}>Letter density</h2>
            <p className={`${textarea === '' ? 'block' : 'hidden'} text-preset-4 ${currentTheme.densityDescription} font-dmsans`}>No characters found. Start typing to see letter density.</p>
            <div
                style={{ height: `${toggle ? '170px' : '100%'}` }}
                className={`${textarea === '' ? 'hidden' : 'flex'} flex-col gap-[0.75rem] overflow-hidden`}
            >
                {sortedPercentages.map(({ letter, count, percentage }) => (
                    <div
                        key={letter}
                        className='flex items-center justify-between'
                    >
                        <p className={`text-preset-4 ${currentTheme.letters} w-[1rem]`}>{letter.toUpperCase()}</p>
                        <div className={`w-[53.6875rem] h-[0.75rem] rounded-full ${currentTheme.emptyPercentage} relative z-1`}>
                            <div
                                style={{ width: `${percentage}%` }}
                                className={`h-[0.75rem] rounded-full bg-light-purple absolute top-0 left-0 z-99`}>
                            </div>
                        </div>
                        <p className={`text-preset-4 ${currentTheme.letters}`}>{count} ({percentage.toFixed(2)}%)</p>
                    </div>
                ))}
            </div>
            <button
                onClick={handleToggle}
                className={`${textarea === '' ? 'hidden' : 'flex'} items-center gap-[0.5rem] text-preset-4 ${currentTheme.seeMore}`}
            >
                See {toggle ? 'more' : 'less'}
                <img src={`${currentTheme.chevron}`} alt="" className={`transform transition ease-in-out ${toggle ? '' : 'rotate-180'}`} />
            </button>
        </div>
    )
}

export default LetterDensity;