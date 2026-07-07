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
    <div className='flex items-center justify-center bg-[#101a14] min-h-[calc(100vh-8rem)] py-12 px-4 text-[#e2ede6] relative overflow-hidden'>
      {/* Detalhe de fundo decorativo com clima vintage */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4e7c5d_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className='w-full max-w-md border border-[#365945] bg-gradient-to-br from-[#17271e] to-[#121f18] p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md flex flex-col gap-6 text-center z-10'>
        <h1 className='text-3xl font-serif font-bold text-rose-400 tracking-wide'>Deletar Produto</h1>
        <p className='text-[#c4d6cb] font-sans font-light'>Você tem certeza que deseja apagar este produto?</p>
        <div className='bg-[#0d1611] border border-[#365945] p-4 rounded-xl font-serif font-bold text-xl text-[#e8f5ec]'>
          {produto.nome}
        </div>
        <div className='flex gap-4 pt-2'>
          <Link to='/produtos' className='w-1/2 py-3 bg-transparent text-[#d5ecdc] hover:bg-[#20382b]/60 border border-[#528f6f] rounded-xl font-serif font-semibold transition-colors'>
            Não
          </Link>
          <button onClick={apagarProduto} className='w-1/2 py-3 bg-rose-700 hover:bg-rose-800 text-white rounded-xl font-serif font-semibold transition-colors shadow-md'>
            Sim
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarProduto