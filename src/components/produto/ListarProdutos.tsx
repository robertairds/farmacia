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
    <div className='container mx-auto py-8 px-4 text-slate-100 min-h-[calc(100vh-8rem)]'>
      <h1 className='text-3xl font-bold text-center mb-8 text-emerald-400'>Lista de Produtos</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {produtos.map((prod) => (
          <CardProduto key={prod.id} produto={prod} />
        ))}
      </div>
    </div>
  )
}

export default ListarProdutos