function Fundo() {
    const mascara = 'radial-gradient(ellipse at center, black 30%, transparent 75%)'

    return (
        <div aria-hidden="true" className="pointer-events-auto fixed inset-0 -z-10 overflow-hidden">
            {/* fixed inset-0: gruda no tamanho da tela inteira, e fica parado enquanto a página rola */}
            {/* -z-10: z-index negativo, então vai atrás do conteúdo. Como a navbar tem bg-fundo/80 backdrop-blur, o brilho aparece desfocado atrás dela */}
            {/* pointer-events-none: o fundo não intercepta cliques */}
            {/* aria-hidden="true": leitores de tela ignoram (é só decoração) */}
            {/* blur-3xl: desfoca um círculo colorido, que vira um “brilho”. Os bg-primaria/25 são o roxo a 25% */}

            <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primaria/25 blur-3xl" />

            <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-destaque/15 blur-3xl" />

            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                    maskImage: mascara,
                    WebkitMaskImage: mascara,
                }}

                // A grade: duas linhas de degradê (vertical e horizontal) repetidas a cada 48px. A mask-image com degradê radial apaga as bordas, e a grade fica visível só no centro
                // Repara no style={{...}}: usei style porque são valores longos e únicos. O Tailwind não precisa dar conta de tudo
                // Os componentes de fundo ficam numa função separada (FundoHome) pra Home continuar limpa
            />
        </div>
    )
}

export default Fundo