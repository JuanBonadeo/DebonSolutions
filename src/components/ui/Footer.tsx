import Image from 'next/image'
import Link from 'next/link'
 

export const Footer = () => {
    return (
        <div className="flex flex-col !py-10 bg-black">
            <div className="grid grid-cols-4 w-full h-16 px-5 ">
                {/* Nav Links for Desktop */}
                <div className="hidden md:col-span-3 md:flex md:justify-center md:items-center md:gap-10">
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
                <div className="col-span-1 flex items-center">
                    <Link href="/">
                        <span>
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={200}
                                height={200}
                                className="h-15 w-auto"
                            />
                        </span>
                    </Link>
                </div>

            </div>
            <div className="h-[1px] w-[70%] bg-white !m-auto !my-5"></div>
            <p className='text-gray-200 text-xs text-center'>© 2025 B&D , Agencia de Desarrollo de Software. All Rights Reserved</p>
        </div>
    )
}
