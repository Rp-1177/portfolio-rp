import { Outlet } from "react-router";

// <Outlet />: o “buraco” no Layout onde a rota filha aparece. Sem ele, as páginas não renderizam

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
    return (
        <div className="flex min-h-screen flex-col">

{/* min-h-screen: altura mínima de 100% da tela
flex-col: Flexbox em coluna (um item embaixo do outro)

E no <main> tem flex-1: faz ele ocupar todo o espaço que sobrar, empurrando o Footer pro final da tela mesmo quando a página tem pouco conteúdo. É o truque clássico do footer fixo embaixo. Já w-full faz ele ocupar 100% da largura disponível. */}

            <Navbar />
            <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout