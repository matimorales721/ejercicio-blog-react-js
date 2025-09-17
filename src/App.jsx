import { useState } from 'react'
import './App.css'
import Articulo from './components/Articulo'
import ListaArticulos from './components/ListaArticulos'
import Sidebar from './components/Sidebar'
import Comentario from './components/Comentario'
import FormularioComentario from './components/FormularioComentario'

function App() {
  try {
    const [comentarios, setComentarios] = useState([]);

  return (
    <>
      <ListaArticulos>
        <Articulo
          titulo="Mi primer artículo"
          autor="Juan Pérez"
          fecha="2023-03-15"
          contenido="Este es el contenido de mi primer artículo."
          categoria="Introducción"
        />
        <Articulo
          titulo="Aprendiendo React"
          autor="María Gómez"
          fecha="2023-04-10"
          contenido="React es una biblioteca de JavaScript para construir interfaces de usuario."
          categoria="React"
        />
      </ListaArticulos>

      {comentarios.map((comentario, index) => (
        <Comentario key={index} usuario={comentario.usuario} fecha={comentario.fecha} texto={comentario.texto} />
      ))}

      <FormularioComentario onAgregarComentario={(comentario) => {
        comentario.fecha = new Date().toLocaleDateString();
        setComentarios([...comentarios, comentario]);
      }} />

      <Sidebar />
    </>
  )
  } catch (error) {
    console.error("Error en el componente App:", error);
  }
  
}

export default App
