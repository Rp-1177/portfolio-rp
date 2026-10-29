import { motion } from "motion/react"
import Button from "../components/Button"
import FichaSkills from "../components/FichaSkills"
import { useTitulo } from "../hooks/useTitulo"
import Fundo from "../components/Fundo"
import Revelar from "../components/Revelar"

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
}

// staggerChildren: 0.12 no pai faz os filhos entrarem um após o outro, com 0,12s de intervalo, e nenhum delay manual é necessário

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// Variants são estados com nome (hidden, visible), definidos num objeto fora do componente

function Home() {
    useTitulo('Ruan | Desenvolvedor Front End')
    
    return (
        <>
            <motion.section

// O pai (motion.section) declara initial="hidden" e animate="visible", e os filhos herdam esses nomes automaticamente. Basta cada filho dizer variants={item}.

                variants={container}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-start gap-6 py-8 md:py-20"
            >

{/* flex (linha): eixo principal é horizontal. justify-* controla o horizontal, items-* controla o vertical.
flex-col (coluna): inverte. O eixo principal vira vertical, então justify-* controla o vertical e items-* controla o horizontal.

Por isso items-start aqui alinha tudo à esquerda. Sem ele, o padrão é stretch, e os botões esticariam até ocupar a largura toda.

gap-6: 24px entre cada filho
py-8 md:py-20: 32px de padding vertical no celular, 80px de tela média pra cima */}

                <motion.p variants={item} 
                className="font-medium text-destaque">
                    Olá, mundo!👋
                </motion.p>

                <motion.h1 
                    variants={item}
                    className="font-titulo text-4xl leading-tight font-bold md:text-6xl"
                >
                    Eu sou <span className="text-primaria">Ruan Pablo</span>,
                    <br />
                    desenvolvedor Full-Stack.
                </motion.h1>

{/* font-titulo: a Space Grotesk que a gente registrou
text-4xl: tamanho de 36px (e já define uma altura de linha padrão)
leading-tight: line-height de 1.25. Em títulos grandes, linhas muito espaçadas ficam “soltas”.
md:text-6xl: de 768px pra cima, sobe pra 60px

No JSX, <br /> precisa do fechamento automático (/), porque no JSX toda tag precisa ser fechada. E o <span className="text-primaria"> pinta só um trecho, já que span é inline e não quebra a linha.                 */}

                <motion.p variants={item} className="max-w-xl text-lg text-texto-suave">
                    Crio interfaces bonitas, rápidas e acessíveis. Atualmente aprofundando meus conhecimentos
                    em programação Full-Stack.
                </motion.p>

{/* max-w-xl limita a 36rem (576px). Linhas de texto muito longas cansam a leitura, e o ideal fica em torno de 60 a 75 caracteres por linha.                 */}

                <motion.div variants={item} className="flex flex-wrap gap-4">

{/* flex-wrap deixa os itens quebrarem de linha quando não cabem. Sem isso, no celular eles ficariam espremidos ou vazariam pra fora da tela. */}

                    <Button to="/projetos">Ver projetos</Button>
                    <Button to="/contato" variante="contorno">
                    Fale comigo
                    </Button>
                </motion.div>
            </motion.section>

            <Revelar>
                <FichaSkills />
            </Revelar>
        </>
    )    
}

// O return só pode devolver um elemento raiz. O <>...</> agrupa o Hero e a Ficha sem criar uma div a mais no HTML.

export default Home









                {/* cada número vale 0,25rem (4px). Então p-4 = 16px, p-6 = 24px, mt-4 = 16px de margem em cima. */}
                
            
                {/* <!--span circulando a palavra pra poder formatar de forma separada--> */}


{/* // p = padding, m = margin. Com direção: px (horizontal), py (vertical), pt/pb/pl/pr (topo/baixo/esq/dir)
// w- largura, h- altura, max-w- largura máxima, min-h- altura mínima
// text- serve pra tamanho (text-xl) e cor (text-primaria)
// bg- fundo, border- borda, gap- espaço entre itens
// /80 no fim da cor = opacidade (bg-fundo/80 = 80% visível)
// md:flex: só aplica de tela média pra cima. O Tailwind é mobile-first: classe sem prefixo vale pra tudo, e os prefixos (sm 640px, md 768px, lg 1024px, xl 1280px) só adicionam mudanças em telas maiores. */}
