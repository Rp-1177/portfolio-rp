import Card from "../components/Card"
import { useTitulo } from "../hooks/useTitulo"

const status = [
    { rotulo: 'Classe', valor: 'Full-Stack Developer' },
    { rotulo: 'Foco atual', valor: 'TypeScript e APIs REST' },
    { rotulo: 'Objetivo', valor: 'Aprofundar mais meus conhecimentos em Full-Stack para melhor uso profissional' },
]

const inventario = [
    { emoji: '✈️', titulo: 'Jornada', texto: 'Meu interesse pela programação começou na adolescência, por meio de vídeos sobre criadores de conteúdo desenvolvendo sites e jogos no YouTube. Em 2023, iniciei minha graduação em Análise e Desenvolvimento de Sistemas pela UNIALFA, transformando esse interesse em um objetivo profissional.' },
    { emoji: '💻', titulo: 'Dev', texto: 'Estou sempre buscando aprimorar minhas habilidades em Full Stack, explorando tecnologias como React, Tailwind, CSS e TypeScript, enquanto aprofundo meus conhecimentos para criar aplicações cada vez mais completas, modernas e eficientes.' },
    { emoji: '👾', titulo: 'Código', texto: 'Gosto de desenvolver interfaces criativas e funcionais, buscando constantemente aprender novas tecnologias e aprimorar minhas habilidades de programação por meio da prática e de criação de novos projetos.' },
]

function Sobre() {
    useTitulo('Sobre | Ruan')
    
    return (
        <section>
            <h1 className="font-titulo text-4xl font-bold">Sobre mim</h1>
            
            <div className="mt-8 grid gap-10 md:grid-cols-3">

{/* Layout 2/3 + 1/3: o grid tem md:grid-cols-3 (3 colunas), e o bloco de texto usa md:col-span-2, que faz ele ocupar 2 das 3 colunas. O Card de Status fica com a coluna restante. No celular tudo empilha, porque sem prefixo é 1 coluna. */}

                <div className="space-y-4 text-texto-suave md:col-span-2">
                    <p>
                        Sou formado em Análise e Desenvolvimento de Sistemas pela UNIALFA e tenho interesse em desenvolvimento de software, com foco na criação de interfaces modernas, funcionais e intuitivas.
                    </p>
                    <p>Durante minha formação, desenvolvi conhecimentos em lógica de programação, desenvolvimento web e mobile, bancos de dados, infraestrutura e metodologias de desenvolvimento. Atualmente, aprofundando e expandindo meus conhecimentos em back-end, APIs REST e banco de dados.</p>
                    <p>Busco uma oportunidade profissional para aplicar meus conhecimentos em projetos reais, colaborar com uma equipe de desenvolvimento e continuar evoluindo tecnicamente, contribuindo para a criação de soluções eficientes e de qualidade.</p>
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