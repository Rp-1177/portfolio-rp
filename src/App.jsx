  import { Routes, Route } from "react-router"

// <Routes>: o “juiz”. Olha a URL atual e renderiza só a <Route> que combina

  import Layout from "./layouts/Layout"
  import Home from "./pages/Home"
  import Sobre from "./pages/Sobre"
  import Projetos from "./pages/Projetos"
  import Contato from "./pages/Contato"
  import NaoEncontrada from "./pages/NaoEncontrada"

  function App() {
    return (
      <Routes>
        <Route element={<Layout />}>

{/* Rota sem path (<Route element={<Layout />}>): é uma layout route. Não tem URL própria, só serve de moldura pras rotas filhas */}

          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />

{/* <Route path="/sobre" element={<Sobre />} />: “quando a URL for /sobre, mostra o componente Sobre” */}

          <Route path="/projetos" element={<Projetos />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="*" element={<NaoEncontrada />} />

{/* path="*" é o curinga: casa com qualquer URL que nenhuma outra rota pegou. O React Router escolhe a rota mais específica que combina, e o * é sempre a menos específica. Por isso a ordem não importa: /sobre continua indo pro Sobre, mesmo com o curinga declarado depois. */}
{/* Por que dentro da rota do Layout? Pra a página 404 aparecer com navbar e footer. O visitante que errou o link não fica “preso” numa tela vazia e consegue navegar pro resto do site.
 */}
{/* Por que uma 404 importa: links quebrados, URL digitada errada, página removida. Sem ela, o usuário vê uma tela em branco (só navbar e footer) e acha que o site quebrou.
 */}
        </Route>
      </Routes>
    )
  }

  export default App