import Articulo from './Articulo'

function ListaArticulos({ articulos }) {
        
    return (
        <>
            {articulos.map((articulo, index) => (
                <Articulo key={index} {...articulo} />
            ))}
        </>
    )
}

export default ListaArticulos;