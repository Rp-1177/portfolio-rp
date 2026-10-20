import { Link } from "react-router";

const variantes = {
    primario: 'bg-purple-600 text-white hover:bg-primaria/80',
    contorno: 'border border-primaria text-primaria hover:bg-primaria/10',
}

function Button({ to, href, variante = 'primario', children}) {
    const classes = `inline-block rounded-lg px-6 py-3 font-medium transition-colors ${variantes[variante]}`

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

export default Button