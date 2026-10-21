function Card ({ children, className = '' }) {

// O className = '' é importante: sem o padrão vazio, quando ninguém passa className, o valor seria undefined e a string final traria a palavra “undefined” colada nas classes.

    return (
        <div
        className={`rounded-xl border border-white/10 bg-superficie p-6 transition hover:-translate-y-1 hover:border-primaria/50 ${className}`}

// rounded-xl: cantos de 12px
// border border-white/10: borda de 1px branca com 10% de opacidade
// bg-superficie: a cor que a gente definiu no @theme
// p-6: padding de 24px nos 4 lados
// transition: anima um conjunto de propriedades (cor, borda, sombra, transform...). transition-colors anima só cores.
// hover:-translate-y-1: o sinal de menos antes do nome deixa o valor negativo. No eixo Y, negativo é pra cima. Então o card sobe 4px no hover.
// hover:border-primaria/50: a borda fica roxa com 50% no hover

        >
            {children}
        </div>
    )
}

export default Card