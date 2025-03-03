'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'


export const Hero2 = () => {
    return (
        <>
            <div className="flex flex-col bg-white justify-center items-center gap-15  !my-10">

                <motion.h2
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: .3, ease: "easeIn" }}

                    className='text-3xl text-center ' >Conoce a quienes están detrás del código</motion.h2>

                <div className="grid md:grid-cols-2 gap-15 md:gap-5 lg:gap-20 !mb-10">

                    <motion.div
                        initial={{ y: 100, scale: 0 }}
                        whileInView={{ y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                          type: "spring",
                          stiffness: 150, 
                          damping: 10, 
                          delay: 0.2, 
                        }}

                        className="flex flex-col justify-center items-center lg:items-start gap-3">
                        <Image src={'/yo.jpeg'} alt={'Juan Cruz Bonadeo'} height={800} width={1200} className='rounded-full object-cover w-45 h-45 shadow-2xl' />
                        <h3 className='font-bold text-2xl'>Juan Cruz Bonadeo</h3>
                        <p className='text-center max-w-xs lg:text-left lg:max-w-lg'>Estudiante de Ingeniería en Sistemas en la UTN de Rosario. <br /><br />
                            Apasionado por la tecnología y la resolución de problemas. Juan se especializa en arquitectura de software y sistemas eficientes, asegurando que cada proyecto sea robusto y escalable.
                        </p>
                        <button className='btn-primary'>Linkedin</button>
                    </motion.div>

                    <motion.div
                        initial={{ y: 100, scale: 0 }}
                        whileInView={{ y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                          type: "spring",
                          stiffness: 150,
                          damping: 15, 
                          delay:  0.3, 
                        }}

                        className="flex flex-col justify-center items-center lg:items-start gap-3">
                        <Image src={'/pela.jpeg'} alt={'Juan Cruz Bonadeo'} height={800} width={1200} className='rounded-full object-cover w-45 h-45 shadow-2xl' />
                        <h3 className='font-bold text-2xl'>Lucas Descalzo</h3>
                        <p className='text-center max-w-xs lg:text-left lg:max-w-lg'>Estudiante de Ciencia de Datos en la Universidad Austral. <br /><br />
                            Amante de los datos y el diseño, Lucas combina análisis y creatividad para crear aplicaciones intuitivas y visualmente atractivas. Su enfoque es hacer la tecnología accesible para todos.
                        </p>
                        <Link href={''} className='btn-primary'>Linkedin</Link>
                    </motion.div>

                </div>

            </div>
        </>
    )
}
