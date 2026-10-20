import { Link, NavLink } from 'react-router'

const links = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/contato', label: 'Contato' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-fundo/80 backdrop-blur-sm">

 {/* sticky: o elemento rola junto com a página até chegar na posição definida, e aí gruda
top-0: a posição onde gruda: 0 de distância do topo
z-50: z-index 50, a ordem de empilhamento. Número maior fica por cima. Sem isso, o conteúdo passaria por cima da navbar ao rolar
border-b: borda de 1px só embaixo. border-white/10 deixa ela branca bem fraquinha
backdrop-blur: desfoca o que tá atrás do elemento (efeito de vidro fosco) */}

      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">    

{/* max-w-6xl: largura máxima de 72rem (1152px mx-auto: margem horizontal automática, que centraliza o bloco
flex: ativa o Flexbox (itens lado a lado)
items-center: alinha os itens no eixo vertical
justify-between: joga o primeiro item pra esquerda e o último pra direita, com espaço no meio
px-6 py-4: padding de 24px nos lados e 16px em cima/embaixo */}

        <Link to="/" className="font-titulo text-xl font-bold text-primaria">

{/* <Link to="/">: link que troca de página sem recarregar (substitui o <a>) */}

          &lt;Dev/&gt;

{/* &lt;Dev/&gt;: o &lt; e o &gt; são códigos pra mostrar os símbolos < e > como texto */}

          </Link>
        <ul className="flex gap-6">
          {links.map(({ to, label }) => (

// .map() transforma a lista links em vários <li>, e o key ajuda o React a identificar cada item

            <li key={to}>
              <NavLink

// <NavLink>: um Link que sabe se a rota tá ativa. A função ({ isActive }) => ... recebe true/false, e foi assim que o link atual ficou ciano

                to={to}
                end={to === '/'}

// end: sem ele, o link / ficaria ativo em todas as páginas, já que todas começam com /. Com end, só vale quando a URL é exatamente /

                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-destaque ${

                    // hover:text-destaque: só aplica quando o mouse tá em cima

                    isActive ? 'text-destaque' : 'text-texto-suave'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar