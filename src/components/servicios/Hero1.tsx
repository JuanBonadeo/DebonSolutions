import Image from 'next/image'
import { Line } from '../ui/Line'

export const Hero1 = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center items-center  gap-15 md:gap-0 lg:gap-20 !pt-30 !pb-20  md:!my-40 fade-in">

                <div className="flex flex-col gap-5 justify-center items-center lg:items-start">
                    <h1 className='text-4xl font-bold text-center' >Servicios que impulsan tu negocio</h1>
                    <p className='text-md text-center max-w-xs md:text-left md:max-w-sm'>
                    Nos enfocamos en crear landing pages de alto rendimiento utilizando Next.js, garantizando velocidad, SEO optimizado y una experiencia de usuario excepcional.
                    </p>
                </div>


                <Image src='/servicios1.svg' alt='logo' height={300} width={300} />

            </div>

            <Line />
        </>



    )
}