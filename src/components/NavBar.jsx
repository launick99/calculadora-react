export default function Navbar() {
    const logoUrl = "https://images.vexels.com/media/users/3/127358/isolated/preview/736663fe6f9e03fcb39ace9020c42b4c-icono-de-calculadora-estacionaria.png";

    return (
        <nav className="navbar bg-body-secondary">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logoUrl} alt="Logo Calculadora" width="30" height="24" className="d-inline-block align-text-top"/>
                    Calculadora
                </a>
            </div>
        </nav>
    );
}