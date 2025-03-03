'use client'
import { motion } from 'motion/react'
import Image from 'next/image'

const items = [
    {
        title: '1. Análisis de necesidades',
        p: 'Analizamos los requisitos del cliente y la mejor manera de implementar nuestro software.',
        svg: 'analisis.svg'
    },
    {
        title: '2. Planificación',
        p: 'Planificamos cada parte del proyecto, preparando la lógica necesaria para el software',
        svg: 'plan.svg'
    },
    {
        title: '3. Diseno UI/uX',
        p: 'Llevamos a cabo el diseno final de la interfaz de usuario.',
        svg: 'disenio.svg'
    },
    {
        title: '4. Desarrollo',
        p: 'Desarrollamos todo el proyecto, basado en los disenos y planes realizados previamente.',
        svg: 'desarrollo.svg'
    },
    {
        title: '5. Control de calidad',
        p: 'Realizamos pruebas rigurosas para asegurar el funcionamiento adecuado del software.',
        svg: 'control.svg'
    },
    {
        title: '6. Despliegue',
        p: 'Finalmente, entregamos y publicamos el proyecto.',
        svg: 'deployy.svg'
    },

]

export const Hero3 = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-1 !my-20'>

            <motion.h3
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: .3, ease: "easeIn" }}
                className='text-2xl font-bold'>
                Nuestro Proceso
            </motion.h3>

            <motion.h4
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: .5, ease: "easeIn" }}
                className='text-lg font-bold  text-primary'>
                ¿Como funciona?
            </motion.h4>

            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5 !my-10">
                {
                    items.map((i, index) => (
                        <motion.div
                        initial={{ y: 100, scale: 0 }}
                        whileInView={{ y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 15,
                            delay: 0.2 * index,
                        }}
                            key={i.title} className="flex flex-col justify-center items-center gap-1 bg-gray-200 rounded !p-2">
                            <Image src={i.svg} alt={i.title} height={800} width={1200} className='w-[150px] ' />
                            <h4 className='font-bold'>{i.title}</h4>
                            <p className='text-xs max-w-2xs text-center'>{i.p}</p>

                        </motion.div>
                    ))
                }
            </div>


        </div>
    )
}
