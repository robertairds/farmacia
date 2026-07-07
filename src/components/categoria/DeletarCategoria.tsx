import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { buscar, deletar } from '../../services/Service'
import type Categoria from '../../models/categoria/Categoria'

function DeletarCategoria() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: '', descricao: '' })

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {})
    } catch (error) {
      console.log("Erro ao buscar")
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  async function apagarCategoria() {
    try {
      await deletar(`/categorias/${id}`, {})
      alert('Categoria apagada com sucesso!')
      navigate('/categorias')
    } catch (error) {
      alert('Erro ao apagar categoria.')
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] py-8 px-4 text-slate-100'>
      <div className='w-full max-w-md bg-slate-800 p-8 rounded-2xl shadow-xl flex flex-col gap-6 text-center'>
        <h1 className='text-3xl font-bold text-rose-500'>Deletar Categoria</h1>
        <p className='text-slate-300'>Você tem certeza que deseja apagar esta categoria?</p>
        <div className='bg-slate-900 p-4 rounded-xl border border-slate-700 font-bold text-xl'>
          {categoria.nome} - {categoria.descricao}
        </div>
        <div className='flex gap-4'>
          <Link to='/categorias' className='w-1/2 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-colors'>
            Não
          </Link>
          <button onClick={apagarCategoria} className='w-1/2 py-3 bg-rose-600 hover:bg-rose-700 rounded-lg font-semibold transition-colors'>
            Sim
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarCategoria