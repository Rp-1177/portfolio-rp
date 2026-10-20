import Card from "./Card"

const skills = [
    { nome: 'HTML', nivel: 90 },
    { nome: 'CSS', nivel: 80 },
    { nome: 'JavaScript', nivel: 70 },
    { nome: 'React', nivel: 60 },
    { nome: 'Tailwind', nivel: 50 },
]

function FichaSkills() {
    return (
        <section className="py-12">
            <h2 className="font-titulo text-3xl font-bold">Ficha de personagem</h2>

            <Card className="mt-8 max-w-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                    <p className="font-titulo text-xl font-bold">Ruan Pablo</p>
                    <p className="text-sm text-texto-suave">Classe: Front-End Developer</p>
                </div>
                <span className="rounded-full bg-primaria/20 px-3 py-1 text-sm font-medium text-primaria">
                Nível 1
                </span>
            </div>

            <ul className="mt-6 space-y-4">
                {skills.map(({ nome, nivel }) => (
                    <li key={nome}>
                        <div className="mb-1 flex justify-between text-sm">
                            <span>{nome}</span>
                            <span className="text-texto-suave">{nivel}/100</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                         <div
                         className="h-full rounded-full bg-linear-to-r from-primaria to-destaque"
                         style={{ width: `${nivel}%` }}
                        />
                        </div>
                    </li>
                ))}
            </ul>
         </Card>
    </section>
)
}


export default FichaSkills