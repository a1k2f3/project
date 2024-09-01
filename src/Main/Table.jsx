import React from 'react'

const Table = () => {
  return (
   <>
      <div className='flex justify-center item-center '>
        <table  className=' border-2px border-black '>
            <tr className=''>
                <th>Mark Attendence</th>
                <th> Mark Leave</th>
            <th>view</th>
        </tr>
        <tr>
            <td><button className='bg-red-600'>Absent</button></td>
            <td><button className='bg-green-500'>Leave</button></td>
            <td><button className='bg-slate-300'>View</button></td>
            
        </tr>
        
    </table>
    </div>
     
   </>
  )
}

export default Table