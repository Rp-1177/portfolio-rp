import Button from "../components/Button"
import FichaSkills from "../components/FichaSkills"

function Home() {
    return (
        <>
            <section className="flex flex-col items-start gap-6 py-8 md:py-20">
                <p className="font-medium text-destaque">Olá, mundo!👋</p>

                <h1 className="font-titulo text-4xl leading-tight font-bold md:text-6xl">
                    Eu sou <span className="text-primaria">Ruan Pablo</span>,
                    <br />
                    desenvolvedor front end.
                </h1>

                <p className="max-w-xl text-lg text-texto-suave">
                    Crio interfaces bonitas, rápidas e acessíveis. Atualmente aprofundando meus estudos em 
                    React e Tailwind.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Button to="/projetos">Ver projetos</Button>
                    <Button to="/contato" variante="contorno">
                    Fale comigo
                    </Button>
                </div>
            </section>

            <FichaSkills />
        </>
    )    
}

export default Home









                {/* cada número vale 0,25rem (4px). Então p-4 = 16px, p-6 = 24px, mt-4 = 16px de margem em cima. */}
                
            
                {/* <!--span circulando a palavra pra poder formatar de forma separada--> */}


// p = padding, m = margin. Com direção: px (horizontal), py (vertical), pt/pb/pl/pr (topo/baixo/esq/dir)
// w- largura, h- altura, max-w- largura máxima, min-h- altura mínima
// text- serve pra tamanho (text-xl) e cor (text-primaria)
// bg- fundo, border- borda, gap- espaço entre itens
// /80 no fim da cor = opacidade (bg-fundo/80 = 80% visível)
// md:flex: só aplica de tela média pra cima. O Tailwind é mobile-first: classe sem prefixo vale pra tudo, e os prefixos (sm 640px, md 768px, lg 1024px, xl 1280px) só adicionam mudanças em telas maiores.
