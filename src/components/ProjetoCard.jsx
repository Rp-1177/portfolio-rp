import Card from "./Card";
import Button from "./Button";

function ProjetoCard({ titulo, descricao, tecnologias, github, demo}) {
    return (
        <Card className="flex flex-col">

{/* <Card className="flex flex-col">: lembra do className como prop? Aqui a gente adiciona o flex em coluna ao Card. Não conflita com nada que já tá lá. */}

            <h2 className="font-titulo text-xl font-bold">{titulo}</h2>
            <p className="mt-2 flex-1 text-texto-suave">{descricao}</p>

{/* flex-1 no parágrafo: ele “come” todo o espaço livre do card. Resultado: as tags e os botões ficam sempre colados embaixo, mesmo quando um card tem descrição curta e outro longa. Cards de alturas diferentes ficam alinhados. */}

            <ul className="mt-4 flex flex-wrap gap-2">
                {tecnologias.map((tec) => (
                    <li
                        key={tec}
                        className="rounded-full bg-primaria/20 px-3 py-1 text-xs font-medium text-purple-300"
                        >

{/* Os ids de tecnologia viram badges: o mesmo .map() de antes, com key={tec} (cada nome é único no projeto) e o estilo de pílula que usamos na ficha (rounded-full bg-primaria/20 ... text-primaria). text-xs é 12px. */}

                            {tec}
                        </li>
                ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
                <Button href={github} variante="contorno">
                    Github
                </Button>
                {demo && <Button href={demo}>Ver online</Button>}

{/* {demo && <Button ...>}: renderização condicional. O && funciona assim: se demo for “verdadeiro” (texto não vazio), renderiza o botão. Se for string vazia '', o React não mostra nada. Resultado: o botão “Ver online” só aparece quando existe link de demo. ⚠️ Cuidado: se o valor for o número 0, o React mostra o “0” na tela. Com números, use contador > 0 && .... */}
{/* O Button decide: tem to? É Link. Não tem? É <a> normal. */}

            </div>
        </Card>
    )
}

export default ProjetoCard

// Semântica de títulos: a página tem um h1, as seções são h2, e os títulos dos cards são h3. Essa hierarquia ajuda leitores de tela e o Google. Escolhe o nível pela estrutura, e o tamanho visual com as classes text-*.