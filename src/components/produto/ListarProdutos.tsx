import { useEffect, useState } from 'react'
import { buscar } from '../../services/Service'
import type Produto from '../../models/produto/Produto'
import CardProduto from './CardProduto'

function ListarProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  async function gerenciarProdutos() {
    try {
      await buscar('/produtos', setProdutos, {})
    } catch (error) {
      console.log("Erro ao carregar produtos")
    }
  }

  useEffect(() => {
    gerenciarProdutos()
  }, [produtos.length])

  return (
    <div className='bg-[#101a14] min-h-[calc(100vh-8rem)] py-12 px-6 md:px-14 text-[#e2ede6]'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl md:text-4xl font-serif font-bold text-center mb-10 text-[#c2dec9] tracking-wide'>
          Lista de Produtos
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {produtos.map((prod) => (
            <CardProduto key={prod.id} produto={prod} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListarProdutos