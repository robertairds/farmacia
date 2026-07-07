import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { buscar, cadastrar, atualizar } from '../../services/Service'
import type Produto from '../../models/produto/Produto'
import type Categoria from '../../models/categoria/Categoria'

function FormProduto() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    descricao: '',
    quantidade: 0,
    laboratorio: '',
    preco: 0,
    foto: '',
    categoria: null
  })

  async function buscarProdutoPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {})
    } catch (error) {
      console.log("Erro ao buscar produto")
    }
  }

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias, {})
    } catch (error) {
      console.log("Erro ao buscar categorias")
    }
  }

  useEffect(() => {
    buscarCategorias()
    if (id !== undefined) {
      buscarProdutoPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value
    })
  }

  function handleCategoriaChange(e: ChangeEvent<HTMLSelectElement>) {
    const categoriaSelecionada = categorias.find(c => c.id === Number(e.target.value))
    setProduto({
      ...produto,
      categoria: categoriaSelecionada || null
    })
  }

  async function gerarNovoProduto(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      if (id !== undefined) {
        await atualizar(`/produtos`, produto, setProduto, {})
        alert('Produto atualizado com sucesso!')
      } else {
        await cadastrar(`/produtos`, produto, setProduto, {})
        alert('Produto cadastrado com sucesso!')
      }
      navigate('/produtos')
    } catch (error) {
      alert('Erro ao salvar produto.')
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] py-8 px-4 text-slate-100'>
      <form onSubmit={gerarNovoProduto} className='flex flex-col w-full max-w-md bg-slate-800 p-8 rounded-2xl shadow-xl gap-4'>
        <h1 className='text-3xl font-bold text-center mb-4 text-emerald-400'>
          {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
        </h1>
        
        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-sm'>Nome</label>
          <input type='text' name='nome' value={produto.nome} onChange={atualizarEstado} placeholder='Nome do produto' className='bg-slate-900 border border-slate-700 p-2.5 rounded-lg text-white' />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-sm'>Descrição</label>
          <input type='text' name='descricao' value={produto.descricao} onChange={atualizarEstado} placeholder='Descrição' className='bg-slate-900 border border-slate-700 p-2.5 rounded-lg text-white' />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-sm'>Quantidade</label>
          <input type='number' name='quantidade' value={produto.quantidade} onChange={atualizarEstado} className='bg-slate-900 border border-slate-700 p-2.5 rounded-lg text-white' />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-sm'>Laboratório</label>
          <input type='text' name='laboratorio' value={produto.laboratorio} onChange={atualizarEstado} className='bg-slate-900 border border-slate-700 p-2.5 rounded-lg text-white' />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-sm'>Preço</label>
          <input type='number' step='0.01' name='preco' value={produto.preco} onChange={atualizarEstado} className='bg-slate-900 border border-slate-700 p-2.5 rounded-lg text-white' />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-sm'>Link da Foto</label>
          <input type='text' name='foto' value={produto.foto} onChange={atualizarEstado} placeholder='https://...' className='bg-slate-900 border border-slate-700 p-2.5 rounded-lg text-white' />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='font-semibold text-sm'>Categoria</label>
          <select name='categoriaId' onChange={handleCategoriaChange} className='bg-slate-900 border border-slate-700 p-2.5 rounded-lg text-white'>
            <option value=''>Selecione uma categoria</option>
            {categorias.map(c => (
              <option key={c.id} value={c.id}>{c.nome}</option>
            ))}
          </select>
        </div>

        <button type='submit' className='bg-emerald-600 hover:bg-emerald-700 py-3 rounded-lg font-bold transition-colors mt-2'>
          Salvar
        </button>
      </form>
    </div>
  )
}

export default FormProduto