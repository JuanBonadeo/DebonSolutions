import Image from 'next/image'

const items = [
    {
        title: '1. Análisis de necesidades',
        p: 'Analizamos los requisitos del cliente y la mejor manera de implementar nuestro software.',
        svg: 'nosotros1.svg'
    },
    {
        title: '2. Planificación',
        p: 'Planificamos cada parte del proyecto, preparando la lógica necesaria para el software',
        svg: 'nosotros1.svg'
    },
    {
        title: '3. Diseno UI/uX',
        p: 'Llevamos a cabo el diseno final de la interfaz de usuario.',
        svg: 'nosotros1.svg'
    },
    {
        title: '4. Desarrollo',
        p: 'Desarrollamos todo el proyecto, basado en los disenos y planes realizados previamente.',
        svg: 'nosotros1.svg'
    },
    {
        title: '5. Control de calidad',
        p: 'Realizamos pruebas rigurosas para asegurar el funcionamiento adecuado del software.',
        svg: 'nosotros1.svg'
    },
    {
        title: '6. Despliegue',
        p: 'Finalmente, entregamos y publicamos el proyecto.',
        svg: 'nosotros1.svg'
    },

]

export const Hero3 = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-1 !my-10'>

            <h3 className='text-2xl font-bold'>Nuestro Proceso</h3>
            <h4 className='text-lg font-bold text-amber-500'>¿Como funciona?</h4>

            <div className="grid grid-cols-3 gap-5 !my-10">
                {
                    items.map(i => (
                        <div key={i.title} className="flex flex-col justify-center items-center gap-1 bg-gray-200 rounded !p-2">
                            <Image src={i.svg} alt={i.title} height={800} width={1200} className='w-[150px]' />
                            <h4 className='font-bold'>{i.title}</h4>
                            <p className='text-xs max-w-2xs text-center'>{i.p}</p>

                        </div>
                    ))
                }
            </div>


        </div>
    )
}
