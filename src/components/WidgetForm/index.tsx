import React, { useState } from 'react'
import ClosedButton from '../ClosedButton'

import bugImageUrl from '../../assets/Bug.svg'
import ideaImageUrl from '../../assets/Idea.svg'
import thoughtImageUrl from '../../assets/Thought.svg'
import FeedbackTypeStep from './Steps/FeedbackTypeStep'
import FeedbackContentStep from './Steps/FeedbackContentStep'

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes;  /* as chaves dos tipos existentes na constante feedbackTypes */

// Object.entries(feedbackTypes) => [['BUG', '{conteudo do BUG}'], ['IDEA', '{conteudo do IDEA}'], ['OTHER', '{conteudo do OTHER}']]
// para cada posição do array (index), ele retorna A CHAVE e o seu conteudo, respectivamente.

export default function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null >(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      

      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} /> /* passando como props */

      ): (
        <FeedbackContentStep feedbackType={feedbackType} />
      )}
      
      <footer className='text-xs text-neutral-400'>
        Feito com ♥ pela <a className="underline underline-offset-2"href="https://www.google.com/">BlaBlaBla</a>
      </footer>
    </div>
  )
}
