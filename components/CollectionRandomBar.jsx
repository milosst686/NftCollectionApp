import Image from 'next/image';
import React from 'react';
import logoImage from '../public/graphic/logo.png'

export const CollectionRandomBar = () => {

  return (
    <div className={ 'flex w-full  shadow-xl  z-[100] bg-[#4a6b79]'}>
        <div className=' justify-between items-center w-full h-full ml-20 pl-2'>
        <Image src={logoImage} alt="/" width='100'height='100' />
        </div>
    </div>      
  )
}
