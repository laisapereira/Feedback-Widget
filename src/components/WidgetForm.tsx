import React, { useState } from 'react'
import ClosedButton from './ClosedButton'

import bugImageUrl from '../assets/Bug.svg'
import ideaImageUrl from '../assets/Idea.svg'
import thoughtImageUrl from '../assets/Thought.svg'

const feedbackTypes = {
  BUG:{
    title:'Problema',
    image:{
      source: bugImageUrl,
      alt:'Imagem de um inseto'
    }
  },

  IDEA:{
    title:'Ideia',
    image:{
      source: ideaImageUrl,
      alt:'Imagem de uma lâmpada'
    }
  },

  OTHER:{
    title:'Outro',
    image:{
      source: thoughtImageUrl,
      alt:'Imagem de um balão de pensamento'
    }

  }
}

type FeedbackType = keyof typeof feedbackTypes;  /* as chaves dos tipos existentes na constante feedbackTypes */

// Object.entries(feedbackTypes) => [['BUG', '{conteudo do BUG}'], ['IDEA', '{conteudo do IDEA}'], ['OTHER', '{conteudo do OTHER}']]
// para cada posição do array (index), ele retorna A CHAVE e o seu conteudo, respectivamente.

export default function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null >(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className='text-xl leading-6'> Deixe seu feedback</span>
        <ClosedButton />
      </header>

      <div className='flex py-8 gap-2 w-full'>
        {Object.entries(feedbackTypes).map(([key, value]) =>{ /* destruturando pra n precisar chamar index[x], ja chamo as propriedades q quero diretamente */
            return(
              <button 
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center focus:outline-none gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 "
                onClick={() => setFeedbackType(key as FeedbackType)} /* inferindo de modo manual que a key sempre vai ter os tipos ja declarados no FeedbackType */
                type="button"
              >
                <img src={value.image.source} alt={value.image.alt}/>
                <span>{value.title}</span>
              </button>
            )
        })}

      </div>

      <footer className='text-xs text-neutral-400'>
        Feito com ♥ pela <a className="underline underline-offset-2"href="https://www.google.com/">BlaBlaBla</a>
      </footer>
    </div>
  )
}
