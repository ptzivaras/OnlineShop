import React from 'react'

const SeactionHeading = ({title}) => {
  return (
    <div className='flex flex-wrap px-10 my-5 items-center gap-2'>
        <div className='border rounded border-1 bg-black w-2 h-10'>
        </div>
        <p className='text-2xl'>{title}</p>
    </div>
  )
}

SeactionHeading.defaultProps = {

}

SeactionHeading.prototype= {
    title:String
}

export default SeactionHeading