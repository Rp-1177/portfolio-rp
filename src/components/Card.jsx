function Card ({ children, className = '' }) {
    return (
        <div
        className={`rounded-xl border border-white/10 bg-superficie p-6 transition hover:-translate-y-1 hover:border-primaria/50 ${className}`}
        >
            {children}
        </div>
    )
}

export default Card