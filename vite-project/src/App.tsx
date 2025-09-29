import { useState, useEffect } from 'react'

// tema escuro e claro
import themes from './themes';

// componentes
import Header from './Header/Header';
import Inputs from './Inputs/Inputs'
import ThreeCards from './Three Cards/ThreeCards'
import LetterDensity from './Letter Density/LetterDensity';

// interface dos botões pseudo-checkboxes
interface ButtonProps {
  id: string,
  label: string
}

// interface ThemeProps {
//   overallBg: string,
//   LogoSrc: any,
//   title: string,
//   changeBtn: any,
//   mainHeading: string,
//   textareaBg: string,
//   textareaBorder: string,
//   textareaText: string,
//   checkboxes: string,
//   label: string,
//   headingLetter: string,
//   letters: string,
//   emptyPercentage: string,
//   seeMore: string
// }

function App() {

  // estado da textarea
  const [textarea, setTextarea] = useState<string>('');

  // estado do número de caracteres
  const [charCount, setCharCount] = useState<number>(0);

  // estado do botão de cortar os espaços
  const [trimmed, setTrimmed] = useState<boolean>(false);

  // estado dos botões que são pseudo-checkboxes
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  // estado que guarda os temas escuro e claro
  const [currentTheme, setCurrentTheme] = useState<typeof themes[0]>(themes[0]);

  // estado que seta o botão e - consequentemente - muda os temas
  const [themeBtn, setThemeBtn] = useState<any>(false);


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

  // variavel que guarda uma condicional
  // condicional determina que se trimmed for verdadeiro, checamos se existem espaços e retiramos eles, assim dando a contagem sem espaços. 
  // caso contrário, mantemos a contagem de caracteres de forma normal.
  const charsWithoutSpaces = trimmed ? charCount - (textarea.match(/\s/g)?.length || 0) : charCount

  // pega a variavel do estado de textarea e retira os espaços, assim definindo a existência de múltiplas strings, ou seja, palavras. Depois disso, contamos elas.
  const wordCount = textarea.trim() === "" ? 0 : textarea.trim().split(/\s+/).length;

  // cortamos novamente textarea com o método trim, porém somente após uma combinação de ponto e espaço, assim definindo novamente múltiplas strings, porém agora no formato de frases. 
  const sentencesCount = textarea.trim() === "" ? 0 : textarea.trim().split(/[.!?]+[\s\n]*/).filter(Boolean).length;


  const handleChangeTheme = () => {
    setThemeBtn(prevState => !prevState);
  }

  useEffect(() => {
    if (themeBtn === true) {
      setCurrentTheme(themes[0])
    } else if (themeBtn === false) {
      setCurrentTheme(themes[1]);
    }
  }, [themeBtn])



  return (
    <div className={`flex justify-center gap-[48px] w-full h-full pt-[32px] pb-[64px] ${currentTheme.overallBg}`}>

      {/* container do conteudo em geral */}
      <div className='flex flex-col items-center w-[990px] min-h-[799px] gap-[3rem]'>
        <Header
          currentTheme={currentTheme}
          handleChangeTheme={handleChangeTheme}
        />
        <h1 className={`text-preset-1 font-dm-sans ${currentTheme.mainHeading} font-bold text-center leading-[4rem] tracking-[-0.0625rem]`}>
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
          wordCount={wordCount}
          currentTheme={currentTheme}
        />
        <ThreeCards
          charsWithoutSpaces={charsWithoutSpaces}
          wordCount={wordCount}
          sentencesCount={sentencesCount}
          currentTheme={currentTheme}
        />
        <LetterDensity
          textarea={textarea}
          charCount={charCount}
          charsWithoutSpaces={charsWithoutSpaces}
          currentTheme={currentTheme}
        />
      </div>
      {/* container do conteudo em geral */}

    </div>
  )
}

export default App
