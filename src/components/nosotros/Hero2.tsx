import Image from 'next/image'
import React from 'react'
import { Line } from '../ui/Line'

export const Hero2 = () => {
    return (
        <>
            <div className="flex flex-col bg-white justify-center items-start gap-15 !ml-20 !my-10">

                <h2 className='text-3xl text-left max-w-110' >Conoce a quienes están detrás del código</h2>

                <div className="grid grid-cols-2 gap-20 !mb-10">

                    <div className="flex flex-col justify-center items-start gap-3">
                        <Image src={'/yo.jpeg'} alt={'Juan Cruz Bonadeo'} height={800} width={1200} className='rounded-full object-cover w-40 h-40' />
                        <p className='max-w-lg'>Estudiante de Ingeniería en Sistemas en la UTN de Rosario. <br /><br />
                            Apasionado por la tecnología y la resolución de problemas. Juan se especializa en arquitectura de software y sistemas eficientes, asegurando que cada proyecto sea robusto y escalable.
                        </p>
                        <button className='btn-primary'>Linkedin</button>
                    </div>

                    <div className="flex flex-col justify-center items-start gap-3">
                        <Image src={'/pela.jpeg'} alt={'Juan Cruz Bonadeo'} height={800} width={1200} className='rounded-full object-cover w-40 h-40' />
                        <p className='max-w-lg'>Estudiante de Ciencia de Datos en la Universidad Austral. <br /><br />
                            Amante de los datos y el diseño, Lucas combina análisis y creatividad para crear aplicaciones intuitivas y visualmente atractivas. Su enfoque es hacer la tecnología accesible para todos.
                        </p>
                        <button className='btn-primary'>Linkedin</button>
                    </div>

                </div>

            </div>
        </>
    )
}
