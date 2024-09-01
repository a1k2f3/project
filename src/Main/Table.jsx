import React from 'react'

const Table = () => {
  return (
    <div className="flex justify-center items-center">
      <table className="border-2 border-black">
        <thead>
          <tr>
            <th>Mark Attendance</th>
            <th>Mark Leave</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button className="bg-red-600 w-full border rounded-md">
                Absent
              </button>
            </td>
            <td>
              <button className="bg-green-500 w-full border rounded-md">
                Leave
              </button>
            </td>
            <td>
              <button className="bg-slate-300 w-full border rounded-md">
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
