import Image from 'next/image'
import { IoArrowForward } from 'react-icons/io5'
import { Line } from '../ui/Line'
import { ParticlesBackground } from '../ui/particle'

export const Hero1 = () => {
    return (
        <>
            <div className="flex bg-white justify-center items-center h-[65vh] gap-15">

                <div className="flex flex-col gap-5 justify-center items-start">
                    <h1 className='text-4xl font-bold' >Servicios que impulsan tu negocio</h1>
                    <p className='text-md text-left max-w-sm'>
                    Nos enfocamos en crear landing pages de alto rendimiento utilizando Next.js, garantizando velocidad, SEO optimizado y una experiencia de usuario excepcional.
                    </p>
                </div>


                <Image src='/servicios1.svg' alt='logo' height={300} width={300} />

            </div>

            <Line />
        </>



    )
}