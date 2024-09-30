import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='h-[100px] bg-[#1F1F1F] flex shadow-2xl' >
        <div className='w-[20%] font-bold text-4xl text-white pl-8 pt-6' >
            EasePolicy
        </div>
        <div className='flex w-[80%] justify-end'>
  <ul className='list-none flex space-x-4 pr-10 items-center text-white text-xl gap-20'>
    <Link to='/' ><li>Home</li></Link>
    <li>About</li>
    <li>Contact</li>
    <li>Policies</li>
    <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
    <li className='text-3xl  ' ><div className=' justify-center border rounded-full items-center flex w-14 h-14' ><FontAwesomeIcon icon={faUser} /></div></li>
  </ul>
</div>

      
    </div>

    </>
  )
}

export default Navbar
