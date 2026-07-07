import { useEffect, useState } from 'react'
import { buscar } from '../../services/Service'
import type Categoria from '../../models/categoria/Categoria'
import CardCategoria from './CardCategoria'

function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([])

  async function gerenciarCategorias() {
    try {
      await buscar('/categorias', setCategorias, {})
    } catch (error) {
      console.log("Erro ao carregar categorias")
    }
  }

  useEffect(() => {
    gerenciarCategorias()
  }, [categorias.length])

  return (
    <div className='container mx-auto py-8 px-4 text-slate-100 min-h-[calc(100vh-8rem)]'>
      <h1 className='text-3xl font-bold text-center mb-8 text-emerald-400'>Lista de Categorias</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {categorias.map((cat) => (
          <CardCategoria key={cat.id} categoria={cat} />
        ))}
      </div>
    </div>
  )
}

export default ListarCategorias