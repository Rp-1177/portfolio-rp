import Card from "../components/Card"

const status = [
    { rotulo: 'Classe', valor: 'Front-End Developer' },
    { rotulo: 'Foco atual', valor: 'React e Tailwind' },
    { rotulo: 'Objetivo', valor: 'Aprofundar mais meus conhecimentos em Front-End para melhor uso profissional' },
]

const inventario = [
    { emoji: '🎮', titulo: 'Jogos', texto: 'Jogos de turno em geral, com mecanicas unicas e um foco na historia, como Persona, Pokemon, Undertale, etc.' },
    { emoji: '📺', titulo: 'Animes', texto: 'Animes shonen em geral, com Mob Psycho como favorito, junto com one piece e Naruto, entre outros da categoria.' },
    { emoji: '💻', titulo: 'Código', texto: 'Gosto de fazer interfaces criativas e aprender coisas novas sempre que possivel pra aumentar minha proficiencia codificando coisas novas' },
]

function Sobre() {
    return (
        <section>
            <h1 className="font-titulo text-4xl font-bold">Sobre mim</h1>
            
            <div className="mt-8 grid gap-10 md:grid-cols-3">

{/* Layout 2/3 + 1/3: o grid tem md:grid-cols-3 (3 colunas), e o bloco de texto usa md:col-span-2, que faz ele ocupar 2 das 3 colunas. O Card de Status fica com a coluna restante. No celular tudo empilha, porque sem prefixo é 1 coluna. */}

                <div className="space-y-4 text-texto-suave md:col-span-2">
                    <p>
                        Sou formado em Análise e Desenvolvimento de Sistemas e estou me aprofundando mais em front end.
                    </p>
                    <p>Comecei na faculdade da UNIALFA de ADS, estudei toda logica e programação, desenvolvimento web e mobile, gestão e metodologias, infraestrutura, entre outras disciplinas do curso.</p>
                    <p>Busco uma oportunidade de emprego para que eu possa fazer minha trajetoria profissional junto da empresa, buscando realizar projetos e ampliar meus conhecimentos, evoluindo com a empresa.</p>
                </div>

                <Card>
                    <h2 className="font-titulo text-xl font-bold">Status</h2>
                    <ul className="mt-4 space-y-3 text-sm">
                        {status.map(({ rotulo, valor }) => (
                            <li key={rotulo} className="flex justify-between gap-4">
                                <span className="text-texto-suave">{rotulo}</span>
                                <span className="text-right font-medium">{valor}</span>

{/* Linha de status: flex justify-between gap-4 põe o rótulo na esquerda e o valor na direita. O gap-4 garante que, se o valor for longo e quebrar de linha, eles não encostem. text-right alinha o valor quebrado à direita. */}

                            </li>
                        ))}
                    </ul>
                </Card>
            </div>

            <h2 className="mt-16 font-titulo text-2xl font-bold">Inventário</h2>

{/* mt-16: 64px. Margem grande pra separar seções diferentes. Dica: use uma escala consistente (4, 8, 12, 16) pra o site ter ritmo. */}

            <div className="mt-6 grid gap-6 sm:grid-cols-3">

{/* sm:grid-cols-3: mesma ideia do md, mas já a partir de 640px. */}

                {inventario.map(({ emoji, titulo, texto }) => (
                    <Card key={titulo}>
                        <p className="text-3xl">{emoji}</p>

{/* Emoji como ícone: text-3xl (30px) aumenta o emoji. É o jeito mais simples de ter “ícones” sem instalar nada. Depois dá pra trocar por uma lib de ícones. */}

                        <h3 className="mt-3 font-titulo text-lg font-bold">{titulo}</h3>
                        <p className="mt-1 text-sm text-texto-suave">{texto}</p>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default Sobre