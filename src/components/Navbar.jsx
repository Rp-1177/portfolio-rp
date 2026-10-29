import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/contato', label: 'Contato' },
]

const estiloDesktop = ({ isActive }) =>
  `text-sm font-medium transition-colors hover:text-destaque ${
    isActive ? 'text-destaque' : 'text-texto-suave'
  }`

// O NavLink aceita uma função no className, que recebe um objeto com isActive. Como o estilo do menu mobile é diferente (links grandes, em bloco, com área de toque confortável), criamos duas funções, uma pra cada contexto. Elas ficam fora do componente porque não dependem de nada dele.
// Repara no { isActive } entre parênteses: é desestruturação dos argumentos da função, o mesmo padrão das props.

const estiloMobile = ({ isActive }) =>
`block rounded-lg px-3 py-3 font-medium transition-colors hover:white/5 ${ isActive ? 'text-destaque' : 'text-texto-suave'  
}`

// O <a> é inline: a área clicável é só o texto. Com block + px-3 py-3, a linha inteira vira clicável. No celular isso é essencial: o dedo precisa de uma área de toque de uns 44px de altura. Aqui: 12px + 24px de linha + 12px = 48px ✅.

function Navbar() {
  const [aberto, setAberto] = useState(false)

// Mesmo useState do formulário, mas agora com um booleano: false = menu fechado, true = aberto. Começa fechado.

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-fundo/80 backdrop-blur-sm">

 {/* sticky: o elemento rola junto com a página até chegar na posição definida, e aí gruda
top-0: a posição onde gruda: 0 de distância do topo
z-50: z-index 50, a ordem de empilhamento. Número maior fica por cima. Sem isso, o conteúdo passaria por cima da navbar ao rolar
border-b: borda de 1px só embaixo. border-white/10 deixa ela branca bem fraquinha
backdrop-blur: desfoca o que tá atrás do elemento (efeito de vidro fosco) */}
{/* O menu mobile está dentro do <header>, fora do <nav>. Como o header é sticky e faz parte do fluxo, quando o menu abre ele empurra o conteúdo pra baixo. Uma alternativa seria deixar o menu “flutuando” por cima com absolute, mas o jeito atual é mais simples e não esconde conteúdo. */}

      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">    

{/* max-w-6xl: largura máxima de 72rem (1152px mx-auto: margem horizontal automática, que centraliza o bloco
flex: ativa o Flexbox (itens lado a lado)
items-center: alinha os itens no eixo vertical
justify-between: joga o primeiro item pra esquerda e o último pra direita, com espaço no meio
px-6 py-4: padding de 24px nos lados e 16px em cima/embaixo */}

        <Link to="/" 
        onClick={() => setAberto(false)}
        className="font-titulo text-xl font-bold text-primaria">

{/* <Link to="/">: link que troca de página sem recarregar (substitui o <a>) */}

          &lt;Ruan/&gt;

{/* &lt;Dev/&gt;: o &lt; e o &gt; são códigos pra mostrar os símbolos < e > como texto */}

          </Link>

{/* Links: só aparecem de tela média pra cima */}

        <ul className="hidden gap-6 md:flex">

{/* hidden = display: none. Em tela pequena, a lista some. */}
{/* md:flex = “de 768px pra cima, vira display: flex”. Como o prefixo só vale a partir do breakpoint, ele substitui o hidden nas telas grandes. */}
{/* hidden (display: none): o elemento continua no HTML, só não aparece. Não é alcançável pelo Tab nem lido por leitor de tela. O state interno dele, se tiver, é mantido. */}
{/* {cond && ...}: o elemento nem existe quando falso. O state interno dele é perdido ao sumir. */}

          {links.map(({ to, label }) => (

// .map() transforma a lista links em vários <li>, e o key ajuda o React a identificar cada item

            <li key={to}>
              <NavLink

// <NavLink>: um Link que sabe se a rota tá ativa. A função ({ isActive }) => ... recebe true/false, e foi assim que o link atual ficou ciano

                to={to}
                end={to === '/'}

// end: sem ele, o link / ficaria ativo em todas as páginas, já que todas começam com /. Com end, só vale quando a URL é exatamente /

                className={ estiloDesktop }>
                  {label}

{/* // hover:text-destaque: só aplica quando o mouse tá em cima */}
               
              </NavLink>
            </li>
          ))}
        </ul>
        
        <button
        type="button"

// type="button": boa prática em todo botão que não envia formulário.

        onClick={() => setAberto((atual) => !atual)}

// !atual inverte o valor: true vira false e vice-versa.
// Usamos a forma com função (atual) => ... porque o novo valor depende do antigo, lembra? É a forma mais segura.
// () => na frente é obrigatório, pelo mesmo motivo do onClick do formulário: passar a função, e não o resultado de uma chamada.

        aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}

// O botão só tem ícone, sem texto, então um leitor de tela não saberia o que ele faz. O aria-label dá um nome pra ele, e usamos um ternário pra o nome mudar junto com o estado.

        aria-expanded={aberto}

// aria-expanded={aberto} avisa se o menu está aberto ou fechado.

        className="rounded-lg p-2 text-texto hover:bg-white/5 md:hidden"

// O contrário: o botão hambúrguer e o menu mobile aparecem por padrão e somem de 768px pra cima. É mobile-first: o padrão é o celular e o md: ajusta o resto.

        >
        <svg

// SVG é uma imagem feita de código. Escala sem perder qualidade e herda cor.

          xmlns="https://www.w3.org/2000/svg"
          viewBox="0 0 24 24"

// viewBox="0 0 24 24": o “sistema de coordenadas” interno do desenho, uma grade de 24×24

          fill="none"

// fill="none": sem preenchimento, só linhas

          stroke="currentColor"

// stroke="currentColor": o traço usa a cor do texto do elemento pai (text-texto no botão). Se a cor mudar, o ícone acompanha.

          strokeWidth="2"
          strokeLinecap="round"
          className="h-6 w-6"

// className="h-6 w-6": 24×24px (h-6 = 1.5rem)

          aria-hidden="true"

// aria-hidden="true" no SVG diz “ignora esse desenho”, já que o botão já tem nome. Evita leitura duplicada.

        >
          {aberto ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}

{/* O ternário {aberto ? ... : ...} troca o desenho entre ☰ e ✕ conforme o state */}
{/* <path d="M4 6h16M4 12h16M4 18h16" />: o d é a “receita” do desenho. M4 6 = mover o cursor pro ponto (4,6), h16 = linha horizontal de 16 de comprimento. Três linhas = ☰ */}
{/* d="M6 6l12 12M18 6L6 18": duas diagonais cruzadas = ✕ */}
{/* Em JSX, atributos SVG viram camelCase: strokeWidth, strokeLinecap. Em HTML puro seria stroke-width. */}
{/* O d é uma sequência de comandos, como instruções pra uma caneta:


M x y = Move a caneta pro ponto (x, y), sem desenhar
L x y = desenha uma Linha até (x, y)
h n / v n = linha horizontal/vertical de comprimento n
Maiúscula = coordenada absoluta, minúscula = relativa ao ponto atual

Lendo o ☰: vai pra (4,6), traça 16 pra direita; vai pra (4,12), traça 16; vai pra (4,18), traça 16. Três barras. */}
{/* Lendo o ☰: vai pra (4,6), traça 16 pra direita; vai pra (4,12), traça 16; vai pra (4,18), traça 16. Três barras.

Lendo o ✕: M6 6 vai pra (6,6), l12 12 desenha 12 pra direita e 12 pra baixo (relativo) e chega em (18,18). Depois M18 6 e L6 18 (absoluto) fecha a outra diagonal.

viewBox="0 0 24 24" define a grade interna (24×24). O h-6 w-6 define o tamanho real (24px). Como são iguais, é 1 pra 1, mas se tu mudar pra h-10 w-10 o desenho escala inteiro sem perder qualidade.
strokeLinecap="round" arredonda as pontas das linhas.
currentColor faz o traço usar a cor do texto, então o ícone herda text-texto do botão. Mudou a cor do texto, mudou o ícone. */}

        </svg>
        </button>

{/* Botão hambúrguer: só aparece em tela pequena */}

      </nav>

{/* Menu mobile: só existe quando aberto */}
      
    <AnimatePresence>

{/* AnimatePresence é a peça que o CSS não tem. Quando aberto vira false, o React remove o elemento na hora, sem tempo pra animar a saída. O AnimatePresence segura o elemento na tela até a animação exit terminar. */}

      {aberto && (
        <motion.nav
          key="menu-mobile"
          aria-label="Menu mobile"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}

// height: 'auto': o Motion consegue animar até a altura natural do conteúdo, o que no CSS puro é difícil

          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="overflow-hidden md:hidden"
        >

{/* Padding e borda ficam no <ul> de dentro, e o overflow-hidden fica no de fora. Se o padding estivesse no elemento que colapsa, ele não chegaria a zero e sobraria uma faixa. */}
{/* // Se aberto for true, a lista existe no HTML. Se for false, ela nem é criada. É diferente do hidden, que esconde mas mantém o elemento na página. Aqui aberto é booleano, então não tem a pegadinha do 0 que falamos antes. */}

        <ul className="space-y-1 border-t border-white/10 px-6 py-4">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
              to={to}
              end={to === '/'}
              onClick={() => setAberto(false)}
              

// Nos links do menu mobile e no logo. Sem isso, tu clica em “Sobre”, a página muda e o menu continua aberto cobrindo o conteúdo. O onClick do NavLink roda junto com a navegação, e não impede ela.

              className={estiloMobile}
            >
              {label}
            </NavLink>
            </li>
          ))}
        </ul>
      </motion.nav>
    )}
  </AnimatePresence>
</header>
)
}

export default Navbar

// 48rem = 768px. O hidden e o md:flex têm a mesma força (um seletor de classe cada). Quem vence é a ordem no CSS gerado, e o Tailwind coloca as variantes de breakpoint depois, então em telas grandes o md:flex ganha.