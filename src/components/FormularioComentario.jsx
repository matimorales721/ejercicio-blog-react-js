import { useState } from 'react';

function FormularioComentario({ onAgregarComentario }) {
    const [usuario, setUsuario] = useState('');
    const [texto, setTexto] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        onAgregarComentario({ usuario, texto });
        setUsuario('');
        setTexto('');
    };

    return (
        <form onSubmit={manejarEnvio}>
            <input
                type="text"
                placeholder="Tu nombre"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
            />
            <textarea
                placeholder="Tu comentario"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                required
            />
            <button type="submit">Agregar Comentario</button>
        </form>
    );
}

export default FormularioComentario;