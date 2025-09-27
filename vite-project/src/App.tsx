import { useState, useEffect, type ReactElement } from 'react'

import Header from './Header/Header';
import Inputs from './Inputs/Inputs'
import ThreeCards from './Three Cards/ThreeCards'

function App() {

  const [textarea, setTextarea] = useState<string>('');
  const [charCount, setCharCount] = useState<number>(0);
  const [trimmed, setTrimmed] = useState<boolean>(false);

  const handleCharCount = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextarea(value);
    setCharCount(value.length);
  }

  const trimChars = () => {
    setTrimmed(prevState => !prevState);
  }



  return (
    <div className='flex justify-center gap-[48px] w-full h-[100vh] pt-[32px] pb-[64px] bg-almost-black'>

      {/* container do conteudo em geral */}
      <div className='flex flex-col items-center w-[990px] h-[799px] gap-[3rem]'>
        <Header />
        <h1 className='text-preset-1 font-dm-sans text-off-white font-bold text-center leading-[4rem] tracking-[-0.0625rem]'>Analyze your text <br /> in real-time.</h1>
        <Inputs
          textarea={textarea}
          handleCharCount={handleCharCount}
          trimChars={trimChars}
        />
        <ThreeCards
          textarea={textarea}
          charCount={charCount}
          trimmed={trimmed}
        />
      </div>
      {/* container do conteudo em geral */}

    </div>
  )
}

export default App
