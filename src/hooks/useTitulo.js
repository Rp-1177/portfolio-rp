import { useEffect } from "react"

export function useTitulo(titulo) {     // 1. o efeito: o que fazer
    useEffect(() => {
        document.title = titulo

// document.title = '...' mexe em algo fora do React (o título da aba). Mudar coisas de fora do componente se chama efeito colateral (side effect). Outros exemplos: buscar dados numa API, criar um timer, escutar o teclado.

// Se tu escrevesse document.title = ... solto na função, ele rodaria durante a renderização, e o React quer que renderizar seja só “calcular o JSX”. O useEffect diz: “roda isso DEPOIS que a tela foi desenhada”.

    }, [titulo])   // 2. as dependências: quando refazer
}

// Array	Quando roda
// []	Uma vez só, quando o componente aparece na tela
// [titulo]	Na primeira vez e toda vez que titulo mudar
// (sem array)	A cada renderização (raramente o que tu quer)]
// Tu clica em “Projetos”. O React monta a página Projetos.
// A função Projetos() roda e chama useTitulo('Projetos | Seu Nome').
// O React desenha a tela.
// Depois, o efeito roda e troca o título da aba.
// O nome começa com use. Isso é o que faz o React (e o ESLint) reconhecerem como hook e verificarem as regras.
// Ele pode usar outros hooks (useState, useEffect...) dentro dele.
// Componente reaproveita visual (devolve JSX)
// Hook reaproveita lógica (devolve valores ou só executa algo)
// As regras dos hooks (valem pra todos)
// Só chame hooks no topo da função do componente (ou de outro hook)
// Nunca dentro de if, for ou funções aninhadas
// Sempre na mesma ordem a cada render

// Por isso a gente põe useTitulo(...) na primeira linha, antes de qualquer return condicional.