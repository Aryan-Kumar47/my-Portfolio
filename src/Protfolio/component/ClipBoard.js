import React, { useState } from 'react'

const ClipBoard = () => {

  const [copyText , setCopyText] = useState('click to copy')

  const copyClipBoard = (e) => {
    let value = e.target.textContent
    navigator.clipboard.writeText(value)
    setCopyText('copied')
    setTimeout(() => {
      setCopyText('click to copy')
    }, 1000);
  }

  return (
    <div className=' text-[6svw] flex flex-col justify-center items-center relative clip' onClick={copyClipBoard}>
      <p>kumararyan101203@gmail.com </p>
      <span className='text-[20px] bottom-[-40px] sm:bottom-[-20px] absolute child opacity-0 border border-[#2E2A27] px-3 py-1 rounded-full transition-opacity'>{copyText}</span>
    </div>
  )
}

export default ClipBoard
