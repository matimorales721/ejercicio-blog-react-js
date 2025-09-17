import './Articulo.css';

function Articulo({ titulo, autor, fecha, contenido, categoria }) {
        
    return (
        <>
            <div className="articulo">
                <h2>Esto es un Articulo</h2>
                <p>título: {titulo}</p>
                <p>autor: {autor}</p>
                <p>fecha: {fecha}</p>
                <p>contenido: {contenido}</p>
                <p>categoría: {categoria}</p>
            </div>
        </>
    )
}

export default Articulo;