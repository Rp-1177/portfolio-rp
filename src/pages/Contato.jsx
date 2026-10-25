import { useState } from 'react'
import { useTitulo } from '../hooks/useTitulo'

const campo =
  'w-full rounded-lg border border-white/10 bg-fundo px-4 py-3 text-texto placeholder:text-texto-suave focus:border-primaria focus:ring-2 focus:ring-primaria/40 focus:outline-none'

// w-full: o campo ocupa 100% da largura do pai
// placeholder:text-texto-suave: estiliza o texto-guia do campo. Prefixos como hover:, focus: e placeholder: são todos variantes, e dá pra combinar com md:.
// focus:border-primaria focus:ring-2 focus:ring-primaria/40: no foco, a borda fica roxa e aparece um anel de 2px. ring é uma “borda externa” feita com sombra.
// focus:outline-none: tira o contorno padrão do navegador. ⚠️ Remover o outline sem colocar outro indicador de foco prejudica quem navega pelo teclado. Por isso a gente adicionou a borda roxa e o ring.
// Uma constante campo guarda as classes dos campos, pra não repetir 3 vezes. Ela tem as classes completas, então o Tailwind enxerga.

const links = [
  { rotulo: 'E-mail', valor: 'rpnascimento1177@gmail.com', href: 'mailto:rpnascimento1177@gmail.com', externo: false },
  { rotulo: 'GitHub', valor: 'github.com/Rp-1177', href: 'https://github.com/Rp-1177', externo: true },
  { rotulo: 'LinkedIn', valor: 'linkedin.com/in/Ruan Pablo', href: 'https://linkedin.com/in/Ruan Pablo', externo: true },
]

function Contato() {
  useTitulo('Contato | Ruan')
  
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [erro, setErro] = useState('')

// Um componente é uma função que roda de novo a cada atualização. Uma variável comum (let erro = '') seria resetada a cada execução. O state é uma variável que o React guarda pra ti entre as execuções.
// useState('') devolve um array de 2 itens: o valor atual (erro) e a função pra mudá-lo (setErro). Os colchetes [ ] são desestruturação de array. O argumento ('') é o valor inicial.
// Convenção de nome: [coisa, setCoisa].
// Regra de ouro: pra mudar, sempre usa a função (setErro('...')). Nunca erro = '...'. A função faz duas coisas: guarda o novo valor e avisa o React pra rodar o componente de novo, e é assim que a tela atualiza. Esse ciclo se chama re-renderização.
// Regras dos hooks (useState é um hook): o nome começa com use, e tu só chama no topo do componente, nunca dentro de if, for ou funções internas.


  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((atual) => ({ ...atual, [name]: value }))
  }

  // e é o objeto do evento. e.target é o elemento que disparou (o input), e dele tu pega name e value.
// O atributo name é a ligação. Se o input tem name="email", então name vale "email" e value vale o que foi digitado.
// { ...atual, [name]: value } cria um objeto novo: copia tudo do anterior (...atual) e sobrescreve só a chave que mudou. Os colchetes [name] são chave computada: usa o conteúdo da variável como nome da chave. Com name = "email", vira { ...atual, email: value }.
// Imutabilidade: nunca faça form.nome = 'x'. O React só percebe mudança quando recebe um objeto novo, então sempre cria uma cópia.
// A forma (atual) => ... (função dentro do setForm) é a mais segura quando o novo valor depende do antigo: o React te entrega o valor mais recente garantido.


  function handleSubmit(e) {
    e.preventDefault()

// Todo <form> tem um comportamento padrão: recarregar a página. Num app React isso apagaria todo o state. O preventDefault() cancela esse comportamento padrão.        

    if (!form.nome.trim() || !form.email.trim() || !form.mensagem.trim()) {
      setErro('Preencha todos os campos antes de enviar.')
      return
    }

// .trim() remove espaços nas pontas, pra uma mensagem só com espaços não passar
// ! inverte: texto vazio é “falso”, então !'' é true
// || significa “ou”: se qualquer campo estiver vazio, entra no if

// O return encerra a função ali. É uma validação com retorno antecipado: se falhou, avisa e para, e o código de baixo não roda.

// Depois o fluxo feliz: limpa o erro, registra no console, marca enviado como true e zera o formulário com um objeto vazio.



    if (!form.email.includes('@')) {
      setErro('Digite um e-mail válido.')
      return
    }

    setErro('')
    // TODO: enviar de verdade (Formspree, EmailJS ou o teu backend)
    console.log('Dados do formulário:', form)
    setEnviado(true)
    setForm({ nome: '', email: '', mensagem: '' })
  }

  return (
    <section>
      <h1 className="font-titulo text-4xl font-bold">Contato</h1>
      <p className="mt-4 max-w-xl text-texto-suave">
        Quer trocar uma ideia ou falar sobre uma oportunidade? Manda uma mensagem!
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-superficie p-6 md:col-span-2">
          {enviado ? (


// Se enviado é true, mostra a mensagem de sucesso. Senão, o formulário. É o condição ? a : b do desafio que a gente comentou, aplicado em blocos de tela. E {erro && (<p>...</p>)} mostra o erro só quando o texto não é vazio.


            <div className="py-8 text-center">
              <p className="text-3xl">✅</p>
              <h2 className="mt-3 font-titulo text-xl font-bold">Mensagem enviada!</h2>
              <p className="mt-2 text-texto-suave">Valeu pelo contato!</p>
              <button
                type="button"
                onClick={() => setEnviado(false)}

// Sem a seta, a função roda durante a renderização, muda o state, renderiza de novo, roda de novo... loop infinito. Sempre passe uma função, e não o resultado de uma chamada.


                className="mt-6 text-sm text-destaque hover:underline"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">

{/* noValidate desliga os balõezinhos de validação do navegador, pra aparecerem as nossas mensagens */}


              <div>
                <label htmlFor="nome" className="mb-2 block text-sm font-medium">

{/* block no label: label é inline e não respeita bem o mb-2. Com block, ele ocupa a linha inteira. */}

                  Nome
                </label>

{/* <label htmlFor="nome"> + <input id="nome">: no JSX é htmlFor (for é palavra reservada do JavaScript). Ligar label e input permite clicar no texto pra focar o campo, e leitores de tela anunciam o rótulo. Isso é acessibilidade de verdade. */}


                <input
                  id="nome"
                  name="nome"
                  type="text"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className={campo}
                />

{/* Isso se chama input controlado: o valor mostrado vem do state (value), e cada tecla digitada dispara o onChange, que atualiza o state. O ciclo: tecla → onChange → setForm → re-render → o input mostra o novo valor. O React vira a fonte da verdade do campo, e por isso dá pra validar, limpar e ler o valor a qualquer momento.                 */}
  {/* Repara que onChange={handleChange} não tem parênteses: tu passa a função, e o React chama ela quando o evento acontecer. Também é uma prop, com uma função como valor! */}


              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"

// Já o type="email" continua útil por abrir o teclado certo no celular.


                  value={form.email}
                  onChange={handleChange}
                  placeholder="voce@email.com"
                  className={campo}
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="mb-2 block text-sm font-medium">
                  Mensagem
                </label>
                <textarea

// <textarea> é o campo de texto longo. rows={5}: número entre chaves, lembra da regra das props? Ele se fecha sozinho (/>) no JSX.


                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  value={form.mensagem}
                  onChange={handleChange}
                  placeholder="Escreva aqui..."
                  className={campo}
                />
              </div>

              {erro && (
                <p role="alert" className="text-sm text-red-400">

{/* text-red-400: o Tailwind já vem com uma paleta pronta (red, green, blue...) com tons de 50 a 950. */}
{/* // role="alert" faz o leitor de tela anunciar o erro assim que aparece. */}


                  {erro}
                </p>
              )}

              <button
                type="submit"
                className="rounded-lg bg-primaria px-6 py-3 font-medium text-white transition-colors hover:bg-primaria/80"
              >
                Enviar mensagem
              </button>

{/* type="submit" no botão do form dispara o onSubmit. type="button" no “Enviar outra mensagem” evita que ele envie o form por acidente */}



            </form>
          )}
        </div>

        <div className="space-y-4">
          {links.map(({ rotulo, valor, href, externo }) => (
            <a
              key={rotulo}
              href={href}
              target={externo ? '_blank' : undefined}

// target={externo ? '_blank' : undefined}: quando o valor é undefined, o React não escreve o atributo no HTML. Assim, links externos abrem em nova aba e o mailto: abre o app de e-mail normalmente.


              rel="noreferrer"
              className="block rounded-xl border border-white/10 bg-superficie p-4 transition hover:border-primaria/50"
            >
              <p className="text-sm text-texto-suave">{rotulo}</p>
              <p className="mt-1 font-medium text-destaque">{valor}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contato


// O Card tem o efeito de subir no hover embutido, e um formulário que se mexe enquanto tu digita é péssimo. Aqui a gente copiou o visual sem o efeito. Daria pra resolver com uma prop no Card (tipo estatico)