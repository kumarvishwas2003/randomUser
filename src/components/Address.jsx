import React from 'react'

const Address = ({content,title}) => {
  return (
    <div className='w-1/3 flex justify-center flex-col'>
        <div className="main font-bold">{content}</div>
        <div className="title font-normal">{title}</div>
    </div>
  )
}

export default Address