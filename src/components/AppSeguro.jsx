import Formulario from "./Formulario"
import Spinner from "./Spinner"
import Resultado from "./Resultado"
import useCotizador from "../hooks/useCotizador"

const AppSeguro = () => {

    const { cargando }  = useCotizador()

    return (
        <>
            <header className="my-10 ">
                <h1 className="text-white text-center text-3xl font-black" >Cotizador de Seguros de Auto</h1>
                <main className="bg-white mg:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10 mt-4">
                    < Formulario />
                    {cargando ? <Spinner /> : < Resultado />}
                </main>
            </header>
        </>
    )
}

export default AppSeguro
