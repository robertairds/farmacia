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
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] py-8 px-4 text-slate-100'>
      <form onSubmit={gerarNovaCategoria} className='flex flex-col w-full max-w-md bg-slate-800 p-8 rounded-2xl shadow-xl gap-4'>
        <h1 className='text-3xl font-bold text-center mb-4 text-emerald-400'>
          {id !== undefined ? 'Editar Categoria' : 'Cadastrar Categoria'}
        </h1>
        
        <div className='flex flex-col gap-2'>
          <label className='font-semibold'>Nome da Categoria</label>
          <input
            type='text'
            name='nome'
            value={categoria.nome}
            onChange={(e) => atualizarEstado(e)}
            placeholder='Ex: Medicamentos'
            className='bg-slate-900 border border-slate-700 p-3 rounded-lg text-white focus:outline-none focus:border-emerald-500'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label className='font-semibold'>Descrição da Categoria</label>
          <input
            type='text'
            name='descricao'
            value={categoria.descricao}
            onChange={(e) => atualizarEstado(e)}
            placeholder='Ex: Analgésicos e antitérmicos'
            className='bg-slate-900 border border-slate-700 p-3 rounded-lg text-white focus:outline-none focus:border-emerald-500'
          />
        </div>

        <button type='submit' className='bg-emerald-600 hover:bg-emerald-700 py-3 rounded-lg font-bold transition-colors mt-2'>
          Salvar
        </button>
      </form>
    </div>
  )
}

export default FormCategoria