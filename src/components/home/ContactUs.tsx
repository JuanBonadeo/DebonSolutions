
export const ContactUs = () => {
    return (
        <div className="!my-15 flex flex-col justify-center items-center gap-5">
            <h2 className="text-2xl font-bold">Hablemos de tu próximo proyecto</h2>
            <h4 className="max-w-2xl text-center">
                ¿Tienes una idea? Nos encantaría escucharla. Contáctanos y descubramos juntos cómo podemos ayudarte a alcanzar tus objetivos.
            </h4>
            <div className="mtop flex gap-10 justify-center items-center w-[90vw]">
                <div className="flex flex-col">
                    <div className="flex gap-1">
                        <p>¿Prefieres llamarnos? - <span className=" text-primary font-semibold">543412510795</span></p>
                    </div>
                    <div className="flex">
                        <p>Escríbenos - <span className="font-bold cursor-pointer">B&DSoluciones@gmail.com</span></p>

                    </div>
                </div>
                <form action="" className="flex flex-col  gap-3 w-[50%]">
                    <input className="bg-gray-300 border-gray-800 !p-2 rounder w-full" placeholder="Nombre" />
                    <input className="bg-gray-300 border-gray-800 !p-2 rounder" placeholder="email" />
                    <textarea className="bg-gray-300 border-gray-800 !p-2 rounder" placeholder="Escriba su Consulta" />
                    <button className="btn-primary w-[150px]"> Enviar</button>
                </form>
            </div>



        </div>
    )
}
