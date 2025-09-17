import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Categorías</h2>
            <ul>
                <li>Introducción</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>CSS</li>
            </ul>
            <h2>Buscar</h2>
            <form>
                <input type="text" placeholder="Buscar artículos..." />
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
}

export default Sidebar;
