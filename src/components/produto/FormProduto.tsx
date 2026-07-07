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
    <div className='flex items-center justify-center bg-[#101a14] min-h-[calc(100vh-8rem)] py-12 px-4 text-[#e2ede6] relative overflow-hidden'>
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4e7c5d_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none"></div>

      <form onSubmit={gerarNovoProduto} className='flex flex-col w-full max-w-lg border border-[#365945] bg-gradient-to-br from-[#17271e] to-[#121f18] p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md gap-4 z-10'>
        <h1 className='text-3xl font-serif font-bold text-center mb-2 text-[#c2dec9] tracking-wide'>
          {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
        </h1>
        
        <div className='flex flex-col gap-1.5'>
          <label className='font-serif text-sm text-[#b8ccc0]'>Nome</label>
          <input type='text' name='nome' value={produto.nome} onChange={atualizarEstado} placeholder='Nome do produto' className='bg-[#0d1611] border border-[#365945] p-3 rounded-xl text-white focus:outline-none focus:border-[#528f6f]' />
        </div>

        <div className='flex flex-col gap-1.5'>
          <label className='font-serif text-sm text-[#b8ccc0]'>Descrição</label>
          <input type='text' name='descricao' value={produto.descricao} onChange={atualizarEstado} placeholder='Descrição' className='bg-[#0d1611] border border-[#365945] p-3 rounded-xl text-white focus:outline-none focus:border-[#528f6f]' />
        </div>

        <div className='flex flex-col gap-1.5'>
          <label className='font-serif text-sm text-[#b8ccc0]'>Quantidade</label>
          <input type='number' name='quantidade' value={produto.quantidade} onChange={atualizarEstado} className='bg-[#0d1611] border border-[#365945] p-3 rounded-xl text-white focus:outline-none focus:border-[#528f6f]' />
        </div>

        <div className='flex flex-col gap-1.5'>
          <label className='font-serif text-sm text-[#b8ccc0]'>Laboratório</label>
          <input type='text' name='laboratorio' value={produto.laboratorio} onChange={atualizarEstado} className='bg-[#0d1611] border border-[#365945] p-3 rounded-xl text-white focus:outline-none focus:border-[#528f6f]' />
        </div>

        <div className='flex flex-col gap-1.5'>
          <label className='font-serif text-sm text-[#b8ccc0]'>Preço</label>
          <input type='number' step='0.01' name='preco' value={produto.preco} onChange={atualizarEstado} className='bg-[#0d1611] border border-[#365945] p-3 rounded-xl text-white focus:outline-none focus:border-[#528f6f]' />
        </div>

        <div className='flex flex-col gap-1.5'>
          <label className='font-serif text-sm text-[#b8ccc0]'>Link da Foto</label>
          <input type='text' name='foto' value={produto.foto} onChange={atualizarEstado} placeholder='https://...' className='bg-[#0d1611] border border-[#365945] p-3 rounded-xl text-white focus:outline-none focus:border-[#528f6f]' />
        </div>

        <div className='flex flex-col gap-1.5'>
          <label className='font-serif text-sm text-[#b8ccc0]'>Categoria</label>
          <select name='categoriaId' onChange={handleCategoriaChange} className='bg-[#0d1611] border border-[#365945] p-3 rounded-xl text-white focus:outline-none focus:border-[#528f6f]'>
            <option value=''>Selecione uma categoria</option>
            {categorias.map(c => (
              <option key={c.id} value={c.id}>{c.nome}</option>
            ))}
          </select>
        </div>

        <button type='submit' className='bg-[#2c4e3b] text-[#e2ede6] hover:bg-[#38634c] border border-[#528f6f] py-3.5 rounded-xl font-serif font-bold tracking-wide transition-colors mt-2 shadow-md'>
          Salvar
        </button>
      </form>
    </div>
  )
}

export default FormProduto