import Image from 'next/image'
import { IoArrowForward } from 'react-icons/io5'
import { Line } from '../ui/Line'
import Link from 'next/link'


export const Hero1 = () => {
    return (
        <>
        
         <div className="flex flex-col md:flex-row bg-gray-200 justify-center items-center  !pt-30 !pb-20 md:!py-20 gap-15 md:gap-8 lg:gap-15 fade-in">


            <div className="flex flex-col gap-3 justify-center items-center">
                <Image src='/4.png' alt='logo' height={300} width={300} />
                <h1 className=' text-2xl  font-semi-bold text-center max-w-xs md:text-4xl md:text-right md:max-w-lg'>Soluciones digitales que marcan la diferencia</h1>
            </div>

            <div className="flex flex-col gap-5 justify-center items-start !pl-10 md:!pl-0">
                <div className="h-[8px] w-12  bg-primary"></div>
                <p className='text-left max-w-xs lg:max-w-md' >Creamos software a medida que optimizamos procesos, y generamos resultados reales. <br /> ¿Listo para impulsar tu negocio? <br/> ¡Hablemos hoy!</p>
                <Link href={'/contacto'} className='flex justify-center items-center gap-1 cursor-pointer  hover:scale-105 transition-all'>
                    <span className='font-bold '>Contactanos</span>
                    <IoArrowForward size={30} className=' bg-primary text-white ' />
                </Link>
            </div>
        </div>
        
        <Line/>
        </>
        
        
       
    )
}
