//import '../App.css';

function Articulo({ titulo, autor, fecha, contenido, categoria }) {
        
    return (
        <>
            <div className="articulo">
                <h2>{titulo}</h2>
                <p>autor: {autor}</p>
                <p>fecha: {fecha}</p>
                <p>contenido: {contenido}</p>
                <p>categoría: {categoria}</p>
            </div>
        </>
    )
}

export default Articulo;