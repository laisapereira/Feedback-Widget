import React from 'react'
import { FeedbackType, feedbackTypes } from '..'


interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export default function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <div className='flex py-8 gap-2 w-full'>
        {Object.entries(feedbackTypes).map(([key, value]) =>{ /* destruturando pra n precisar chamar index[x], ja chamo as propriedades q quero diretamente */
            return(
              <button 
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center focus:outline-none gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 "
                onClick={() => onFeedbackTypeChanged(key as FeedbackType)} /* inferindo de modo manual que a key sempre vai ter os tipos ja declarados no FeedbackType */
                type="button"
              >
                <img src={value.image.source} alt={value.image.alt}/>
                <span>{value.title}</span>
              </button>
            )
        })}

      </div>
  )
}
