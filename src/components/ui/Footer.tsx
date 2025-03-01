import Image from 'next/image'
import Link from 'next/link'
 

export const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full !py-10 bg-black">
            <div className="flex flex-col-reverse justify-center items-center gap-5 md:grid md:grid-cols-3 md:h-16 md:px-5 md:gap-30">
                
                <div className=" col-span-2 flex justify-center items-center gap-5 md:gap-10 ">
                    <Link href="/home">
                        <span className="text-white hover:text-amber-700 transition-colors">Home</span>
                    </Link>
                    <Link href="/nosotros">
                        <span className="text-white hover:text-amber-700 transition-colors">Nosotros</span>
                    </Link>
                    <Link href="/servicios">
                        <span className="text-white hover:text-amber-700 transition-colors">Servicios</span>
                    </Link>
                    <Link href="/contacto">
                        <span className="text-white hover:text-amber-700 transition-colors">Contacto</span>
                    </Link>
                </div>
                {/* Logo */}
                <div className="">
                    <Link href="/">
                        <span>
                            <Image
                                src="/3.png"
                                alt="Logo"
                                width={1200}
                                height={500}
                                className=" w-30 lg:w-40 "
                            />
                        </span>
                    </Link>
                </div>

            </div>
            <div className="h-[1px] w-[70%] bg-white !m-auto !my-5"></div>
            <p className='text-gray-400 text-[.5em] md:text-xs text-center'>© 2025 DebonSolutions , Agencia de Desarrollo de Software. All Rights Reserved</p>
        </div>
    )
}
