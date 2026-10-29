import { motion } from "motion/react";

function Revelar({ children, atraso = 0, className = '' }) {
    return (
        <motion.div

// motion.div é uma div “turbinada”, que entende as props de animação

            className={className}
            initial={{ opacity: 0, y: 24 }}

// initial é o estado de partida (invisível, 24px abaixo). whileInView é o estado pra onde vai quando entra na tela.

            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}

// viewport={{ once: true, amount: 0.2 }}: anima só a primeira vez, quando 20% do elemento estiver visível. Sem o once, ele reanimaria toda vez que tu rola de volta (cansativo).

            transition={{ duration: 0.5, delay: atraso, ease: 'easeOut' }}

// atraso vira delay, e dá pra escalonar elementos

        >
            {children}
        </motion.div>
    )
}

export default Revelar

// Toda animação precisa ter um propósito (guiar o olhar, dar feedback, mostrar estado). Animação por animação cansa.
// Rápido: 150 a 500 ms. Entradas com easeOut.
// Anima opacity e transform sempre que possível
// once: true em animações de rolagem
// Testa em celular de verdade, porque aparelhos fracos sofrem mais
// Sempre respeita reduzir movimento
// Mede de novo no Lighthouse: a biblioteca adiciona peso. Existe o LazyMotion + m pra versão leve, importado também de motion/react