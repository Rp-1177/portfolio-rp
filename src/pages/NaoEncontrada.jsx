import Button from "../components/Button";
import { useTitulo } from '../hooks/useTitulo'

function NaoEncontrada() {
    useTitulo('Página não encontrada | Ruan')

    return (
        <section className="flex flex-col items-center py-16 text-center">
            <p className="font-titulo text-7xl font-bold text-primaria md:text-9xl">404</p>

{/* Layout da página: flex flex-col items-center centraliza tudo na horizontal (lembra dos eixos do flex-col). O text-7xl md:text-9xl faz o “404” gigante, e maior em tela grande. O max-w-md (28rem) segura o parágrafo numa largura boa de leitura. */}

            <h1 className="mt-4 font-titulo text-3xl font-bold">Algo deu errado.</h1>
            <p className="mt-4 max-w-md text-texto-suave">
                A página que você procura não existe ou foi movida. Volte para Home e tente novamente.
                </p>
                <div className="mt-8">
                    <Button to="/">Voltar pra Home</Button>
                </div>
        </section>
    )
}

export default NaoEncontrada