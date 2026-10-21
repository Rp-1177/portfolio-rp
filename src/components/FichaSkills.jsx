import Card from "./Card"

const skills = [
    { nome: 'HTML', nivel: 90 },
    { nome: 'CSS', nivel: 80 },
    { nome: 'JavaScript', nivel: 70 },
    { nome: 'React', nivel: 60 },
    { nome: 'Tailwind', nivel: 50 },
]

// É um array de objetos. Pra adicionar uma skill, é só uma linha nova, sem mexer no layout. Esse padrão (dados separados + .map()) vai aparecer em todo projeto que tu fizer: lista de produtos, de posts, de projetos.

function FichaSkills() {
    return (
        <section className="py-12">
            <h2 className="font-titulo text-3xl font-bold">Ficha de personagem</h2>

            <Card className="mt-8 max-w-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">

{/* justify-between joga o nome à esquerda e o badge à direita
border-b + pb-4 forma o divisor com 16px de respiro embaixo */}

                <div>
                    <p className="font-titulo text-xl font-bold">Ruan Pablo</p>
                    <p className="text-sm text-texto-suave">Classe: Front-End Developer</p>
                </div>
                <span className="rounded-full bg-primaria/20 px-3 py-1 text-sm font-medium text-primaria">
                Nível 1
                </span>

{/* rounded-full (raio de 9999px) deixa o formato de pílula. Fundo roxo com 20% e texto roxo cheio é uma fórmula clássica de badge. */}

            </div>

            <ul className="mt-6 space-y-2">

{/* space-y-4 põe 16px de espaço vertical entre os filhos diretos. A alternativa é flex flex-col gap-4. */}

                {skills.map(({ nome, nivel }) => (

// .map() percorre o array e devolve um <li> por item. Os parênteses depois da seta => fazem o retorno implícito do JSX.
// ({ nome, nivel }) é desestruturação do objeto de cada item.

                    <li key={nome}>

{/* key precisa ser único e estável entre os irmãos. O React usa pra saber qual item é qual quando a lista muda. Use um id ou nome único. Evite o índice do array se a lista puder ser reordenada. */}

                        <div className="mb-1 flex justify-between text-sm">
                            <span>{nome}</span>
                            <span className="text-texto-suave">{nivel}/100</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/10">  {/* trilho */}

{/* h-2 (8px), fundo branco a 10% (a parte “vazia”). O overflow-hidden corta o que passar das pontas arredondadas. */}

                         <div
                         className="h-full rounded-full bg-linear-to-r from-primaria to-destaque"
                         style={{ width: `${nivel}%` }}
                        />

{/* Preenchimento: h-full ocupa 100% da altura do trilho. A largura em % é calculada em relação ao pai, que é o trilho. Por isso 70 vira 70% do trilho. */}
{/* bg-linear-to-r from-primaria to-destaque: degradê da esquerda (r = right) pra direita, do roxo pro ciano. */}
{/* style={{ width: ... }}: as chaves duplas são duas coisas. A de fora diz “aqui vem JavaScript”. A de dentro é o objeto de estilos. Propriedades CSS viram camelCase (backgroundColor, não background-color) pra números dinâmicos (largura vinda de dados), usar style. */}

                        </div>
                    </li>
                ))}
            </ul>
         </Card>
    </section>
)
}


export default FichaSkills