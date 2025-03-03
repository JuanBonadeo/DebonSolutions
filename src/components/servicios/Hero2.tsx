'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { IoArrowForward } from 'react-icons/io5'

const items = [

    {
        title: 'Desarrollo ',
        p: 'Creamos landing pages atractivas y funcionales, diseñadas para convertir visitantes en clientes.'
    },
    {
        title: 'Optimización SEO',
        p: 'Aseguramos que tu landing page esté optimizada para los motores de búsqueda y alcance a tu audiencia ideal.'
    },

    {
        title: 'Diseño Responsivo',
        p: 'Tus landing pages se verán y funcionarán perfectamente en cualquier dispositivo.'
    },

    {
        title: 'Diseño de Conversión',
        p: 'Creamos diseños enfocados en la conversión, con llamados a la acción efectivos.'
    },

]


export const Hero2 = () => {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row bg-white justify-center items-center gap-10 lg:gap-15 !my-15 !px-10">

                <div className="grid md:grid-cols-2 gap-3">
                    {items.map((item, index) => (
                        <motion.div
                            initial={{ y: 100, scale: 0 }}
                            whileInView={{ y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{
                                type: "spring",
                                stiffness: 150,
                                damping: 15,
                                delay: 0.3 * index,
                            }}


                            key={item.title}
                            className="bg-gray-200 rounded flex flex-col justify-center items-start !py-3 !px-3 gap-0"
                        >
                            <h3 className="text-xl font-bold">{item.title}</h3>

                            <p className=" max-w-3xs text-left">{item.p}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay:  0.2, 
                    }}

                    className="flex flex-col justify-center items-start gap-2">

                    <h3 className='text-xl font-bold  text-primary'>Nuestros beneficios</h3>
                    <h2 className='text-2xl font-bold'>Brindamos los mejores servicios</h2>
                    <p className='text-lg max-w-md'>En DebonSolutions queremos asegurarnos de que recibas la mejor experiencia como cliente.</p>

                    <Link href={'/contacto'} className='flex justify-center items-center gap-1 cursor-pointer  hover:scale-105 transition-all'>
                        <span className='font-bold '>Contactanos</span>
                        <IoArrowForward size={30} className=' bg-primary text-white ' />
                    </Link>

                </motion.div>

            </div>
        </>
    )
}
