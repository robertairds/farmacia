import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { buscar, cadastrar, atualizar } from '../../services/Service'
import type Categoria from '../../models/categoria/Categoria'

function FormCategoria() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: '', descricao: '' })

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {})
    } catch (error) {
      console.log("Erro ao buscar categoria")
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      if (id !== undefined) {
        await atualizar(`/categorias`, categoria, setCategoria, {})
        alert('Categoria atualizada com sucesso!')
      } else {
        await cadastrar(`/categorias`, categoria, setCategoria, {})
        alert('Categoria cadastrada com sucesso!')
      }
      navigate('/categorias')
    } catch (error) {
      alert('Erro ao salvar categoria.')
    }
  }

  return (
    <div className='flex items-center justify-center bg-[#101a14] min-h-[calc(100vh-8rem)] py-12 px-4 text-[#e2ede6] relative overflow-hidden'>
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4e7c5d_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>

      <form onSubmit={gerarNovaCategoria} className='flex flex-col w-full max-w-lg border border-[#365945] bg-gradient-to-br from-[#17271e] to-[#121f18] p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md gap-5 z-10'>
        <h1 className='text-3xl font-serif font-bold text-center mb-2 text-[#c2dec9] tracking-wide'>
          {id !== undefined ? 'Editar Categoria' : 'Cadastrar Categoria'}
        </h1>
        
        <div className='flex flex-col gap-2'>
          <label className='font-serif text-sm text-[#b8ccc0] tracking-wide'>Nome da Categoria</label>
          <input
            type='text'
            name='nome'
            value={categoria.nome}
            onChange={(e) => atualizarEstado(e)}
            placeholder='Ex: Medicamentos'
            className='bg-[#0d1611] border border-[#365945] p-3.5 rounded-xl text-white focus:outline-none focus:border-[#528f6f] placeholder-[#5a7364]'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label className='font-serif text-sm text-[#b8ccc0] tracking-wide'>Descrição da Categoria</label>
          <input
            type='text'
            name='descricao'
            value={categoria.descricao}
            onChange={(e) => atualizarEstado(e)}
            placeholder='Ex: Analgésicos e antitérmicos'
            className='bg-[#0d1611] border border-[#365945] p-3.5 rounded-xl text-white focus:outline-none focus:border-[#528f6f] placeholder-[#5a7364]'
          />
        </div>

        <button type='submit' className='bg-[#2c4e3b] text-[#e2ede6] hover:bg-[#38634c] border border-[#528f6f] py-3.5 rounded-xl font-serif font-bold tracking-wide transition-colors mt-3 shadow-md'>
          Salvar
        </button>
      </form>
    </div>
  )
}

export default FormCategoria