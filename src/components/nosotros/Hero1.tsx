import Image from 'next/image'
import { IoArrowForward } from 'react-icons/io5'
import { Line } from '../ui/Line'
import { ParticlesBackground } from '../ui/particle'

export const Hero1 = () => {
    return (
        <>
        
         <div className="flex bg-white justify-center items-center h-[65vh] gap-15">
         
            <div className="flex flex-col gap-5 justify-center items-start">
                <h1 className='text-4xl font-bold' >SOMOS <span className='text-amber-500'>DBSolutions</span></h1>
                <p className='text-md text-left max-w-sm'>Utilizamos tecnologías de vanguardia para transformar organizaciones,  potenciando su crecimientol.</p>
            </div>


                <Image src='/nosotros1.svg' alt='logo' height={300} width={300} />

        </div>
        
        <Line/>
        </>
        
        
       
    )
}