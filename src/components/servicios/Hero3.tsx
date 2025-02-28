import Image from 'next/image'

const items = [
    {
        title: '1. Análisis de necesidades',
        p: 'Analizamos los requisitos del cliente y la mejor manera de implementar nuestro software.',
        svg: 'analisis.svg'
    },
    {
        title: '2. Planificación',
        p: 'Planificamos cada parte del proyecto, preparando la lógica necesaria para el software',
        svg: 'plan.svg'
    },
    {
        title: '3. Diseno UI/uX',
        p: 'Llevamos a cabo el diseno final de la interfaz de usuario.',
        svg: 'disenio.svg'
    },
    {
        title: '4. Desarrollo',
        p: 'Desarrollamos todo el proyecto, basado en los disenos y planes realizados previamente.',
        svg: 'desarrollo.svg'
    },
    {
        title: '5. Control de calidad',
        p: 'Realizamos pruebas rigurosas para asegurar el funcionamiento adecuado del software.',
        svg: 'control.svg'
    },
    {
        title: '6. Despliegue',
        p: 'Finalmente, entregamos y publicamos el proyecto.',
        svg: 'deployy.svg'
    },

]

export const Hero3 = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-1 !my-15'>

            <h3 className='text-2xl font-bold'>Nuestro Proceso</h3>
            <h4 className='text-lg font-bold  text-primary'>¿Como funciona?</h4>

            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5 !my-10">
                {
                    items.map(i => (
                        <div key={i.title} className="flex flex-col justify-center items-center gap-1 bg-gray-200 rounded !p-2">
                            <Image src={i.svg} alt={i.title} height={800} width={1200} className='w-[150px] ' />
                            <h4 className='font-bold'>{i.title}</h4>
                            <p className='text-xs max-w-2xs text-center'>{i.p}</p>

                        </div>
                    ))
                }
            </div>


        </div>
    )
}
