export const projetos = [
    {
        id: 1,
        titulo: 'Meu Portfólio',
        descricao: 'Site pessoal multi-página feito com React, React Router e Tailwind.',
        tecnologias: ['React', 'Tailwind', 'Vite'],
        github: 'https://github.com/Rp-1177/portfolio-rp',
        demo: '',
    },
    {
        id: 2,
        titulo: 'Projeto Full Stack',
        descricao: 'Projeto pessoal Full Stack feito com Javascript, Express, PostgreSQL, SQL, pgAdmin',
        tecnologias: ['Express', 'Node.js', 'Cors', 'Dotenv'],
        github: 'https://github.com/Rp-1177/projeto_full-stack',
        demo: '',   
    },
    {
        id: 3,
        titulo: 'Próximo projeto',
        descricao: 'Espaço reservado pro próximo projeto.',
        tecnologias: ['JavaScript'],
        github: 'https://github.com/Rp-1177',
        demo: '',
    },
]

// export const é um export nomeado. Difere do export default: o nomeado exige o mesmo nome e chaves no import (import { projetos } from ...), e o default pode ser importado com qualquer nome. Um arquivo pode ter vários exports nomeados, mas só um default.
// Cada projeto é um objeto com as mesmas chaves, e tecnologias é um array dentro do objeto.
// O id serve de key única no .map().