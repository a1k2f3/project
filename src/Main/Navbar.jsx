import React from 'react'
import NAVelem from './NAVelem'

const Navbar = () => {
  const item=['Home','Logout','Profile']
    return (
    <div>
<nav>
<ul className=' flex item-center justify-evenly bg-red-200 '>
        {item.map((items) => <NAVelem itemlist={items} />)}
      </ul>
</nav>

    </div>
  )
}

export default Navbar