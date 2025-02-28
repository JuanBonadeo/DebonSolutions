import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Projectos = () => {
  return (
    <div className='flex flex-col bg-white justify-center items-cneter gap-10 !ml-20 !my-10'>
      <h2 className='text-3xl text-left' >Proyectos destacados</h2>
      <h4 className='text-xl font-serif'>Proyectos que reflejan nuestra pasión por crear valor.</h4>
      <div className="grid grid-cols-3">

        <Link href={'https://www.orlandi-inmobiliaria.com/'} className="flex flex-col justify-center items-center gap-3 w-[300px] h-[250px] hover:scale-105 transition-all shadow-2xl rounded-b">
          <Image src={'/orlandi.png'} alt={'orlandi inmobiliaria'} height={800} width={1200} className=' ' />
          <h5 className='font-bold'>Orlandi Propiedades</h5>
        </Link>      

        <Link href={'https://oudparfam.vercel.app/'} className="flex flex-col justify-center items-center gap-3 w-[300px] h-[250px] hover:scale-105 transition-all shadow-2xl rounded-b">
          <Image src={'/oud.png'} alt={'orlandi inmobiliaria'} height={800} width={1200} className='rounded' />
          <h5 className='font-bold'>Oud Parfams</h5>
        </Link>


      </div>
    </div>
  )
}
