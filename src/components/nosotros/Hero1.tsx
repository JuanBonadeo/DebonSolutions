import Image from 'next/image'
import { Line } from '../ui/Line'

export const Hero1 = () => {
    return (
        <>
        
         <div className="flex flex-col md:flex-row gap-15 md:gap-0 lg:gap-20 justify-center items-center !mt-30 !mb-20 md:!my-40 fade-in">
         
            <div className="flex flex-col gap-5 justify-center items-center lg:items-start">
                <h1 className='text-4xl font-bold text-center max-w-md md:max-w-xl' >SOMOS <span className=' text-primary'>DebonSolutions</span></h1>
                <p className='text-md text-center md:text-left max-w-sm'>Utilizamos tecnologías de vanguardia para transformar organizaciones,  potenciando su crecimientol.</p>
            </div>


                <Image src='/nosotros1.svg' alt='logo' height={300} width={300} />

        </div>
        
        <Line/>
        </>
        
        
       
    )
}