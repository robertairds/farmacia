import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { buscar, deletar } from '../../services/Service'
import type Produto from '../../models/produto/Produto'

function DeletarProduto() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const [produto, setProduto] = useState<Produto>({ id: 0, nome: '', descricao: '', quantidade: 0, laboratorio: '', preco: 0 })

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {})
    } catch (error) {
      console.log("Erro ao buscar")
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  async function apagarProduto() {
    try {
      await deletar(`/produtos/${id}`, {})
      alert('Produto apagado com sucesso!')
      navigate('/produtos')
    } catch (error) {
      alert('Erro ao apagar produto.')
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] py-8 px-4 text-slate-100'>
      <div className='w-full max-w-md bg-slate-800 p-8 rounded-2xl shadow-xl flex flex-col gap-6 text-center'>
        <h1 className='text-3xl font-bold text-rose-500'>Deletar Produto</h1>
        <p className='text-slate-300'>Você tem certeza que deseja apagar este produto?</p>
        <div className='bg-slate-900 p-4 rounded-xl border border-slate-700 font-bold text-xl'>
          {produto.nome}
        </div>
        <div className='flex gap-4'>
          <Link to='/produtos' className='w-1/2 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-colors'>
            Não
          </Link>
          <button onClick={apagarProduto} className='w-1/2 py-3 bg-rose-600 hover:bg-rose-700 rounded-lg font-semibold transition-colors'>
            Sim
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarProduto