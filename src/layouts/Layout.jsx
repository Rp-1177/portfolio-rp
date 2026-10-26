import { Outlet } from "react-router";

// <Outlet />: o “buraco” no Layout onde a rota filha aparece. Sem ele, as páginas não renderizam

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
    return (
        <div className="flex min-h-screen flex-col">
            <a href="#conteudo"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-60 focus:rounded-lg focus:bg-primaria-escura focus:px-4 focus:py-2 focus:text-white"
            >
                Pular para o conteúdo
            </a>

{/* min-h-screen: altura mínima de 100% da tela
flex-col: Flexbox em coluna (um item embaixo do outro)

E no <main> tem flex-1: faz ele ocupar todo o espaço que sobrar, empurrando o Footer pro final da tela mesmo quando a página tem pouco conteúdo. É o truque clássico do footer fixo embaixo. Já w-full faz ele ocupar 100% da largura disponível. */}

            <Navbar />
            <main 
            id="conteudo"
            tabIndex={-1}
            className="mx-auto w-full max-w-6xl flex-1 px-6 py-12 focus:outline-none">
                <Outlet />
            </main>

{/* sr-only (“só pra leitor de tela”): deixa o elemento com 1px, recortado e fora da vista, mas presente pro teclado e pra leitores. Diferente do hidden, que o removeria de tudo.
not-sr-only desfaz isso, e o prefixo focus: aplica só quando o link recebe foco. Resultado: aperta Tab uma vez e o link aparece no canto da tela.
href="#conteudo" + id="conteudo": âncora interna. Clicar leva até o elemento com aquele id.
tabIndex={-1} no <main>: permite que ele receba foco por código (sem entrar na ordem do Tab), e assim o foco realmente pula pro conteúdo. O focus:outline-none evita um contorno feio no bloco inteiro.
focus:z-60: fica acima da navbar (z-50). */}

            <Footer />
        </div>
    )
}

export default Layout