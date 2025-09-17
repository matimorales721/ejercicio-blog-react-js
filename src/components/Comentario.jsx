import './Comentario.css'

function Comentario({ usuario, fecha, texto }) {
    return (
        <div className="comentario">
            <p><strong>{usuario}</strong> <em>({fecha})</em></p>
            <p>{texto}</p>
        </div>
    );
}

export default Comentario;
