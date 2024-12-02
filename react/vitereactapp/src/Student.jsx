import React from 'react'
import './Student.css'
function Student({data}) {
  return (
    <div class="icard">
        {
            // JSON.stringify(data)
        }
      <table  >
            <tbody>
                <tr style={{backgroundColor:'brown',color:'white'}}>
                    <td colSpan={2}>{data.college}</td>
                    
                </tr>
                <tr>
                    <td colSpan={2}>{data.pic}</td>
            
                    
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{data.name}</td>
                    
                </tr>
                <tr>
                    <td>Roll No</td>
                    <td>{data.roll}</td>
                    
                </tr>
                <tr>
                    <td>Branch:</td>
                    <td>{data.branch}</td>
                    
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Student