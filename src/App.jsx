import { useState } from 'react'
import './App.css'
import ListaArticulos from './components/ListaArticulos'
import Sidebar from './components/Sidebar'
import Comentario from './components/Comentario'
import FormularioComentario from './components/FormularioComentario'

function App() {
  const [comentarios, setComentarios] = useState([]);

// ✅ Ejercicio: Sistema de Blog Personal
// Crea una aplicación React que incluya:

// Componente Articulo que reciba props como título, autor, fecha, contenido y categoría
// Componente ListaArticulos que reciba un array de artículos y los renderice
// Componente Sidebar que muestre categorías y un formulario de búsqueda
// Componente Comentario que reciba props de usuario, fecha y texto
// Componente FormularioComentario que permita agregar nuevos comentarios
// Requisitos técnicos:

// Usar props para pasar datos entre componentes
// Implementar composición con children donde sea apropiado
// Crear al menos 5 componentes diferentes
// Aplicar estilos CSS para una presentación atractiva
// Usar destructuring en las props
// Implementar funciones para manejar eventos

  return (
    <>
      <ListaArticulos articulos={[
        {
          titulo: "Mi primer artículo",
          autor: "Juan Pérez",
          fecha: "2023-03-15",
          contenido: "Este es el contenido de mi primer artículo.",
          categoria: "Introducción"
        },
        {
          titulo: "Aprendiendo React",
          autor: "María Gómez",
          fecha: "2023-04-10",
          contenido: "React es una biblioteca de JavaScript para construir interfaces de usuario.",
          categoria: "React"
        }
      ]} />

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
}

export default App
