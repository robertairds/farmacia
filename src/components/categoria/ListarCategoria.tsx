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
    <div className='bg-[#101a14] min-h-[calc(100vh-8rem)] py-12 px-6 md:px-14 text-[#e2ede6]'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl md:text-4xl font-serif font-bold text-center mb-10 text-[#c2dec9] tracking-wide'>
          Lista de Categorias
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {categorias.map((cat) => (
            <CardCategoria key={cat.id} categoria={cat} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListarCategorias