import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4 text-emerald-500'


    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
        
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink 
                    to = '/'
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to = '/'
                    className={({isActive}) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to = '/clothes'
                    className={({isActive}) => isActive ? activeStyle : undefined}
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to = '/electronics'
                    className={({isActive}) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to = '/furnitures'
                    className={({isActive}) => isActive ? activeStyle : undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to = '/toys'
                    className={({isActive}) => isActive ? activeStyle : undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to = '/others'
                    className={({isActive}) => isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    monologan@gmail.com
                </li>
                <li>
                    <NavLink to = '/my-orders'>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/my-account'>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to = '/sign-in'>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex  items-center'>
                    <ShoppingBagIcon className="size-6 black-blue-500" />
                    <div>{context.count}</div> 
                </li>
               
            </ul>
        </nav>
        
    )
}

export default Navbar