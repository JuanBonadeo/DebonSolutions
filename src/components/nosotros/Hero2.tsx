import Image from 'next/image'
import Link from 'next/link'


export const Hero2 = () => {
    return (
        <>
            <div className="flex flex-col bg-white justify-center items-center gap-15  !my-10">

                <h2 className='text-3xl text-center ' >Conoce a quienes están detrás del código</h2>

                <div className="grid md:grid-cols-2 gap-15 md:gap-5 lg:gap-20 !mb-10">

                    <div className="flex flex-col justify-center items-center lg:items-start gap-3">
                        <Image src={'/yo.jpeg'} alt={'Juan Cruz Bonadeo'} height={800} width={1200} className='rounded-full object-cover w-45 h-45 shadow-2xl' />
                        <h3 className='font-bold text-2xl'>Juan Cruz Bonadeo</h3>
                        <p className='text-center max-w-xs lg:text-left lg:max-w-lg'>Estudiante de Ingeniería en Sistemas en la UTN de Rosario. <br /><br />
                            Apasionado por la tecnología y la resolución de problemas. Juan se especializa en arquitectura de software y sistemas eficientes, asegurando que cada proyecto sea robusto y escalable.
                        </p>
                        <button className='btn-primary'>Linkedin</button>
                    </div>

                    <div className="flex flex-col justify-center items-center lg:items-start gap-3">
                        <Image src={'/pela.jpeg'} alt={'Juan Cruz Bonadeo'} height={800} width={1200} className='rounded-full object-cover w-45 h-45 shadow-2xl' />
                        <h3 className='font-bold text-2xl'>Lucas Descalzo</h3>
                        <p className='text-center max-w-xs lg:text-left lg:max-w-lg'>Estudiante de Ciencia de Datos en la Universidad Austral. <br /><br />
                            Amante de los datos y el diseño, Lucas combina análisis y creatividad para crear aplicaciones intuitivas y visualmente atractivas. Su enfoque es hacer la tecnología accesible para todos.
                        </p>
                        <Link  href={''} className='btn-primary'>Linkedin</Link>
                    </div>

                </div>

            </div>
        </>
    )
}
