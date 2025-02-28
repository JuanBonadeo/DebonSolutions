import Image from 'next/image'
import { IoArrowForward } from 'react-icons/io5'
import { Line } from '../ui/Line'
// import { ParticlesBackground } from '../ui/particle'

export const Hero1 = () => {
    return (
        <>
        
         <div className="flex bg-gray-200 justify-center items-center h-[55vh] gap-15">
         {/* <ParticlesBackground/> */}


            <div className="title flex flex-col gap-1 justify-center items-center">
                <Image src='/4.png' alt='logo' height={300} width={300} />
                <h1 className='text-4xl text-right max-w-lg'>Soluciones digitales que marcan la diferencia</h1>
            </div>

            <div className="flex flex-col gap-5 justify-center items-start">
                <div className="h-[8px] w-12 bg-amber-500"></div>
                <p className='text-left max-w-md' >Creamos software a medida que optimiza procesos, mejora experiencias y genera resultados reales. ¿Listo para impulsar tu negocio? ¡Hablemos hoy!</p>
                <button className='flex gap-1 cursor-pointer  hover:scale-105 transition-all'>
                    <span className='font-bold '>Contactanos</span>
                    <IoArrowForward size={30} className='bg-amber-500 text-white ' />
                </button>
            </div>
        </div>
        
        <Line/>
        </>
        
        
       
    )
}
