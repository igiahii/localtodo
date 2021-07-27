import React, { useContext, useState } from 'react'
import todoscontext from '../../Context/app'


function Edittodo(props) {

    const context = useContext(todoscontext)
    const [text , setText] = useState(props.text)




    let inputhandler = e =>{
        return(
            setText(e.target.value)
        )
    }
    return(

        <div className="col-6 mb-2 ">
        <div className="d-flex justify-content-between align-items-center border rounded p-3">
            <div>
               <input value ={text} onChange ={inputhandler} className =" form-control" />
            </div>
            <div>
              
                <button type="button" className="btn btn-info btn-sm me-1" onClick={() => context.edit(text)} >edit</button>
              
            </div>
        </div>
    </div>




    )
}  

export default Edittodo ;