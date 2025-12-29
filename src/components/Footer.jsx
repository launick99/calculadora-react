export default function Footer(){
    const anioActual = new Date().getFullYear();

    return (
        <footer className="bg-body-secondary">
            <div className="container text-center py-3">
                <p>© {anioActual} Calculadora. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}