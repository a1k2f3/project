import React from 'react'
import NAVelem from './NAVelem'

const Navbar = () => {
  const item=['Home','Logout','Profile']
    return (
    <div>
<nav>
<ul>
        {item.map((items) => <NAVelem Element={items} />)}
      </ul>
</nav>

    </div>
  )
}

export default Navbar