import { useState } from 'react'

import Shape1 from './../assets/Shape-01.svg'
import Shape2 from './../assets/Shape-02.svg'
import Shape3 from './../assets/Shape-03.svg'

interface CardProps {
  charsWithoutSpaces: string,
  wordCount: number,
  sentencesCount: boolean
}

const ThreeCards: React.FC<CardProps> = ({ charsWithoutSpaces, wordCount, sentencesCount }) => {


  return (
    <div className='flex justify-between items-center gap-[1rem]'>

      <div className=' flex w-[19.95rem] h-[9.375rem] p-[1rem] bg-light-purple rounded-[0.75rem] overflow-hidden relative'>
        <div className='w-full flex flex-col gap-[0.5rem] relative z-10'>
          <h1 className='text-preset-1 text-almost-black font-dmsans font-bold h-[4rem]'>{charsWithoutSpaces}</h1>
          <p className='text-preset-3 text-almost-black font-dm-sans w-full'>Total Characters</p>
        </div>
        <img
          src={Shape1}
          alt=""
          className='w-[9.375rem] h-[9.375rem] absolute top-0 right-[-1.8rem] z-0'
        />
      </div>

      <div className='flex w-[19.95rem] h-[9.375rem] p-[1rem] bg-strong-orange rounded-[0.75rem] overflow-hidden relative'>
        <div className='w-full flex flex-col gap-[0.5rem] relative z-10'>
          <h1 className='text-preset-1 text-almost-black font-dm-sans font-bold h-[4rem]'>{wordCount}</h1>
          <p className='text-preset-3 text-almost-black font-dm-sans w-full'>Word Count</p>
        </div>
        <img
          src={Shape2}
          alt=""
          className='w-[9.375rem] h-[9.375rem] absolute top-0 right-[-1.8rem] z-0'
        />
      </div>

      <div className='flex w-[19.95rem] h-[9.375rem] p-[1rem] bg-light-red rounded-[0.75rem] overflow-hidden relative'>
        <div className='w-full flex flex-col gap-[0.5rem] relative z-10'>
          <h1 className='text-preset-1 text-almost-black font-dm-sans font-bold h-[4rem]'>{sentencesCount}</h1>
          <p className='text-preset-3 text-almost-black font-dm-sans w-full'>Sentence Count</p>
        </div>
        <img
          src={Shape3}
          alt=""
          className='w-[9.375rem] h-[9.375rem] absolute top-0 right-[-1.8rem] z-0'
        />
      </div>
    </div>
  )
}

export default ThreeCards