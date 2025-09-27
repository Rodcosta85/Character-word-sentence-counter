import { useState, useEffect, type ReactElement } from 'react'

import Header from './Header/Header';
import Inputs from './Inputs/Inputs'
import ThreeCards from './Three Cards/ThreeCards'
import LetterDensity from './Letter Density/LetterDensity';

interface ButtonProps {
    id: string,
    label: string
}

function App() {

  // estado da textarea
  const [textarea, setTextarea] = useState<string>('');

  // estado do número de caracteres
  const [charCount, setCharCount] = useState<number>(0);

  // estado do botão de cortar os espaços
  const [trimmed, setTrimmed] = useState<boolean>(false);

  // estado dos botões que são pseudo-checkboxes
  const [checked, setChecked] = useState<Record<string, boolean>>({});




  // função que calcula a quantidade de caracteres na string do textarea
  const handleCharCount = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextarea(value);
    setCharCount(value.length);
  }

  // função que gatilha o botão de cortar os espaços da string do textarea
  const trimChars = () => {
    setTrimmed(prevState => !prevState);
  }

  // array dos botões pseudo-checkboxes
  const buttonArr: ButtonProps[] = [
    { id: 'exclude spaces', label: 'Exclude spaces' },
    { id: 'character limit', label: 'Character limit' }
  ]

  // função para mudar os estados dos botões de acordo com a id deles estabelecida dentro do array anterior
  const handleChecked = (id: string) => {
    setChecked((prev) => ({
      ...prev,
      [id]: !prev[id], // toggle this specific button
    }));
  };

  const charsWithoutSpaces = trimmed ? charCount - (textarea.match(/\s/g)?.length || 0) : charCount

  const wordCount = textarea.trim() === "" ? 0 : textarea.trim().split(/\s+/).length;

  const sentencesCount = textarea.trim() === "" ? 0 : textarea.trim().split(/[.!?]+[\s\n]*/).filter(Boolean).length;



  return (
    <div className='flex justify-center gap-[48px] w-full h-full pt-[32px] pb-[64px] bg-almost-black'>

      {/* container do conteudo em geral */}
      <div className='flex flex-col items-center w-[990px] min-h-[799px] gap-[3rem]'>
        <Header />
        <h1 className='text-preset-1 font-dm-sans text-off-white font-bold text-center leading-[4rem] tracking-[-0.0625rem]'>
          Analyze your text <br /> in real-time.
        </h1>
        <Inputs
          textarea={textarea}
          charsWithoutSpaces={charsWithoutSpaces}
          handleCharCount={handleCharCount}
          trimChars={trimChars}
          checked={checked}
          buttonArr={buttonArr}
          handleChecked={handleChecked}
        />
        <ThreeCards
          charsWithoutSpaces={charsWithoutSpaces}
          wordCount={wordCount}
          sentencesCount={sentencesCount}
        />

        <LetterDensity
          textarea={textarea}
          charCount={charCount}
          charsWithoutSpaces={charsWithoutSpaces}
        />
      </div>
      {/* container do conteudo em geral */}

    </div>
  )
}

export default App
