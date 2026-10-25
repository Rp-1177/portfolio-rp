function Footer() { 
    return (
        <footer className="border-t border-white/10 py-6 text-center text-sm text-texto-suave">
            © {new Date().getFullYear()} Projeto Feito com React e Tailwind.

{/* {new Date().getFullYear()} mostra o ano atual */}

        </footer>
    )
}

export default Footer