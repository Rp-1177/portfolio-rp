import { Link } from "react-router";

// Importa só o Link da biblioteca. As chaves { } indicam import nomeado (pega uma peça específica). Sem chaves, seria import padrão, como o import Card from './Card'.

const variantes = {
    primario: 'bg-purple-600 text-white hover:bg-primaria/80',
    contorno: 'border border-primaria text-primaria hover:bg-primaria/10',
}

// Fica fora da função: é criado uma vez só, e não a cada renderização.
// As chaves (primario, contorno) são os nomes que tus vai passar na prop. Os valores são strings com as classes completas.
// hover:bg-primaria/80: no hover o fundo vai pra 80% de opacidade, então escurece um pouco.
// hover:bg-primaria/10: no hover o botão de contorno ganha um fundo roxo bem suave (10%).

function Button({ to, href, variante = 'primario', children}) {

// Todo componente recebe um único objeto com as props. As chaves aqui fazem desestruturação: em vez de props.to, props.href, tu pega direto to, href.

// variante = 'primario' é um valor padrão: se quem usa o botão não passar variante, vale 'primario'.
// children é tudo que fica entre as tags de abertura e fechamento.

    const classes = `inline-block rounded-lg px-6 py-3 font-medium transition-colors ${variantes[variante]}`

// inline-block: o <a> é inline por padrão, e elementos inline ignoram padding vertical no layout. O inline-block faz ele respeitar o py-3 e ainda ficar do lado de outros elementos.
// rounded-lg: border-radius de 8px.
// px-6 py-3: 24px nos lados e 12px em cima/embaixo.
// font-medium: peso 500, um meio-termo entre normal e negrito.
// transition-colors: anima a troca de cor em ~150ms, então o hover não é seco.
// ${variantes[variante]}: busca no objeto a chave que está guardada na variável variante. Se variante vale 'contorno', é como escrever variantes['contorno'].

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
        )
    }

return (
    <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
    </a>
    )
}

// Retorno antecipado: se veio a prop to, é navegação interna (usa Link, sem recarregar). Se não, é link externo (<a> normal).
// target="_blank" abre em nova aba. rel="noreferrer" é segurança: impede que a página aberta consiga mexer na tua (window.opener) e esconde de onde o visitante veio.

export default Button