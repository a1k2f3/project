import React from 'react'

const Table = () => {
  return (
   <>
      <div className='flex justify-center item-center '>
        <table  className=' '>
            <tr className='m-5'>
                <th>Mark Attendence</th>
                <th> Mark Leave</th>
            <th>view</th>
        </tr>
        <tr>
            <td><button className='bg-red-600 w-96 border border-rounded-4' >Absent</button></td>
            <td><button className='bg-green-500 w-100'>Leave</button></td>
            <td><button className='bg-slate-300 w-100'>View</button></td>
            
        </tr>
        
    </table>
    </div>
     
   </>
  )
}

export default Table