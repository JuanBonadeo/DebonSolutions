
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
            <div className="!my-15 flex justify-center items-center flex-col gap-4">
                <h2 className="text-2xl text-center font-semibold">Innovación, calidad y compromiso</h2>
                <div className="grid grid-cols-2 py-10 gap-10 mtop">
                    {items.map((item) => (
                        <div
                            key={item.title}
                            className="bg-gray-200 rounded flex flex-col justify-center items-start !py-6 !px-6 gap-1"
                        >
                            <div className="flex justify-center items-start gap-4">
                                {item.icon}
                                <h3 className="text-xl font-bold">{item.title}</h3>
                            </div>
                            <p className="p-4 max-w-xs text-left">{item.p}</p>
                        </div>
                    ))}
                </div>
            </div>

    )
}
