import React from 'react'
import Navbar from './Navbar'
import Table from './Table'
const Main = () => {
  return (
    <>
      <div>
        <nav>
          <Navbar />
        </nav>
      </div>
      <main>
<Table/>
        
      </main>
    </>
  )
}

export default Main