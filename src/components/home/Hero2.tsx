
import { IoBarChart, IoColorPaletteSharp, IoRefreshCircle, IoRocket } from 'react-icons/io5'


const items = [

    {
        title: 'Enfoque personalizado',
        p: 'Cada proyecto es único y diseñado para tus necesidades.',
        icon: <IoColorPaletteSharp size={30} className=''/>
    },
    {
        title: 'Tecnología de primera',
        p: 'Utilizamos las herramientas más avanzadas del mercado.',
        icon: <IoRocket size={30} className=''/>
    },
    {
        title: 'Resultados medibles',
        p: 'Nos enfocamos en entregar valor real a tu negocio.',
        icon: <IoBarChart size={30} className=''/>
    },
    {
        title: 'Soporte continuo ',
        p: 'Cada proyecto es único y diseñado para tus necesidades.',
        icon: <IoRefreshCircle size={30} className=''/>
    },
]


export const Hero2 = () => {
    
    return (
            <div className="!my-15 flex justify-center items-center flex-col gap-1">
                <h2 className="text-2xl text-center font-semibold">Innovación, calidad y compromiso</h2>
                <div className="grid md:grid-cols-2 gap-3 lg:gap-10 mtop">
                    {items.map((item) => (
                        <div
                            key={item.title}
                            className="bg-gray-200 rounded flex flex-col justify-center items-center gap-1 p-3 lg:!p-6 "
                        >
                            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                                {item.icon}
                                <h3 className="text-xl font-bold text-center">{item.title}</h3>
                            </div>
                            <p className=" max-w-2xs text-center md:p-4 md:max-w-xs md:text-left">{item.p}</p>
                        </div>
                    ))}
                </div>
            </div>

    )
}
