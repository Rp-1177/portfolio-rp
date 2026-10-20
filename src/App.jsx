  import { Routes, Route } from "react-router"

// <Routes>: o “juiz”. Olha a URL atual e renderiza só a <Route> que combina

  import Layout from "./layouts/Layout"
  import Home from "./pages/Home"
  import Sobre from "./pages/Sobre"
  import Projetos from "./pages/Projetos"
  import Contato from "./pages/Contato"

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
        </Route>
      </Routes>
    )
  }

  export default App