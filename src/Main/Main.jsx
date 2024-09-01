import React from 'react'
import Navbar from './Navbar'
const Main = () => {
  return (
    <>
      <div>
        <nav>
          <Navbar />
        </nav>
      </div>
      <main>
        <div >
        <table>
        <tr>
            <th>Mark Attendence</th>
            <th>Mark Leave</th>
            <th>view</th>
        </tr>
        <tr>
            <td><button>Absent</button></td>
            <td><button>Leave</button></td>
            <td><button>View</button></td>
            
        </tr>
        
    </table>
        </div>
      </main>
    </>
  )
}

export default Main