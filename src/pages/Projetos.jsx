import { projetos } from "../data/projetos"
import { useTitulo } from "../hooks/useTitulo"

// O import do array: { projetos } com chaves, porque foi export nomeado. O caminho ../data/projetos sobe uma pasta (..) e entra em data. Não precisa escrever .js.

import ProjetoCard from "../components/ProjetoCard"

function Projetos() {
    useTitulo('Projetos | Ruan')
    
    return (
        <section>
            <h1 className="font-titulo text-4xl font-bold">Projetos</h1>
            <p className="mt-4 max-w-xl text-texto-suave">
                Projetos desenvolvidos ao longo da minha trajetória de aprendizado e prática em desenvolvimento Full-Stack:
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

{/* grid: ativa. Sem mais nada, vira 1 coluna (perfeito pra celular).
md:grid-cols-2: de 768px pra cima, 2 colunas de largura igual.
lg:grid-cols-3: de 1024px pra cima, 3 colunas.
gap-6: 24px entre linhas e colunas. */}
{/* Os itens do grid esticam por padrão pra mesma altura da linha, e é por isso que os cards ficam alinhados sem a gente pedir. */}
{/* grid-cols-2 vira grid-template-columns: repeat(2, minmax(0, 1fr)): 2 colunas iguais.
fr significa “fração do espaço disponível”. 1fr 1fr = metade e metade.
O minmax(0, 1fr) impede que um conteúdo largo (um texto sem quebra, por exemplo) estoure a coluna. */}

                {projetos.map((projeto) => (
                    <ProjetoCard key={projeto.id} {...projeto} />

// O spread {...projeto}: espalha todas as chaves do objeto como props. É um atalho pra: <ProjetoCard titulo={projeto.titulo} descricao={projeto.descricao} tecnologias={projeto.tecnologias} github={projeto.github} demo={projeto.demo} />
// O id também vai como prop, mas o ProjetoCard não declara ele, então simplesmente ignora.
// A key fica no .map(), no componente de fora, e não dentro do ProjetoCard.

                ))}
            </div>
        </section>
    )
}

export default Projetos