'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'


export const Projectos = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: .3, ease: "easeIn" }}
      
      className='flex flex-col justify-center items-center gap-8 !my-15'>
      <h2 className='text-3xl text-left' >Proyectos destacados</h2>
      <h4 className='text-xl text-center max-w-xs md:max-w-3xl'>Proyectos que reflejan nuestra pasión por crear valor.</h4>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        <Link href={'https://www.orlandi-inmobiliaria.com/'} className="flex flex-col justify-center items-center gap-3 w-[300px] h-[250px] hover:scale-105 transition-all shadow-2xl rounded-b">
          <Image src={'/orlandi.png'} alt={'orlandi inmobiliaria'} height={800} width={1200} className=' ' />
          <h5 className='font-bold'>Orlandi Propiedades</h5>
        </Link>

        <Link href={'https://oudparfam.vercel.app/'} className="flex flex-col justify-center items-center gap-3 w-[300px] h-[250px] hover:scale-105 transition-all shadow-2xl rounded-b">
          <Image src={'/oud.png'} alt={'orlandi inmobiliaria'} height={800} width={1200} className='rounded' />
          <h5 className='font-bold'>Oud Parfams</h5>
        </Link>


      </div>
    </motion.div>
  )
}
