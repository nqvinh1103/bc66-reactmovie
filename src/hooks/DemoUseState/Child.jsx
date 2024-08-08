import React from 'react'

export default function Child({message, onChangeMessage}) {
  return (
    <div>
      <h4>Message từ cha xuống: {message}</h4>
      <button onClick={() => {
        onChangeMessage("Hello BC66")
      }
      } className='bg-green-500 rounded p-2'>Change message</button>
    </div>
  )
}
