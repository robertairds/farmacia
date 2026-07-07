import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full bg-[#1e293b] text-white py-4 px-8 flex justify-between items-center shadow-md'>
      <h2 className='text-xl font-bold tracking-wide'>Farmácia</h2>
      <div className='flex gap-6 font-medium'>
        <Link to="/home" className='hover:text-emerald-400 transition-colors'>Home</Link>
        <Link to="/produtos" className='hover:text-emerald-400 transition-colors'>Produtos</Link>
      </div>
    </div>
  )
}

export default Navbar