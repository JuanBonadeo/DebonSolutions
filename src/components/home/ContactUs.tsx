'use client'

import { motion } from "motion/react"


export const ContactUs = () => {
    return (
        <div className="!mt-30 !mb-15  flex flex-col justify-center items-center gap-5 lg:min-h-[60vh] fade-in">
            <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: .3, ease: "easeIn" }}

                className="text-center max-w-sm md:max-w-xl text-3xl font-bold">
                Hablemos de tu próximo proyecto
            </motion.h2>

            <motion.h4
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: .4, ease: "easeIn" }}
                className="text-lg max-w-xs md:max-w-xl text-center">
                ¿Tienes una idea? Nos encantaría escucharla. Contáctanos y descubramos juntos cómo podemos ayudarte a alcanzar tus objetivos.
            </motion.h4>

            <motion.div 
                initial={{ opacity: 0, rotateY: 180, scale: 0.8 }}
                whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}

                className="mtop flex flex-col-reverse md:flex-row gap-10 justify-center items-center w-[90vw]">
                <div className="flex flex-col">
                    <div className="flex gap-1">
                        <p>¿Prefieres llamarnos? - <span className=" text-primary font-semibold">543412510795</span></p>
                    </div>
                    <div className="flex">
                        <p>Escríbenos - <span className="font-bold cursor-pointer">debonsolutions@gmail.com</span></p>

                    </div>
                </div>
                <form action="" className="flex flex-col  gap-3 w-[85%] md:w-[50%]">
                    <input className="bg-gray-300 border-gray-800 !p-2 rounder w-full" placeholder="Nombre" />
                    <input className="bg-gray-300 border-gray-800 !p-2 rounder" placeholder="email" />
                    <textarea className="bg-gray-300 border-gray-800 !p-2 rounder" placeholder="Escriba su Consulta" />
                    <button className="btn-primary w-[150px]"> Enviar</button>
                </form>
            </motion.div>



        </div>
    )
}
