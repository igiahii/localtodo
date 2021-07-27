import React , {useState ,useContext} from 'react'
import Edittodo from './Edittodo'
import todoscontext from '../../Context/app';


function Todo(props){

const [edit , setEdit] = useState(false)
const context = useContext(todoscontext)
    
    let edittodo = text =>{
        
            context.edit(props.item.key,text)
            setEdit(false)
        
        
    }


    return(
        <> 
            {
                edit === false 
                ?(

                    
                        <div className="col-6 mb-2 ">
                        <div className="d-flex justify-content-between align-items-center border rounded p-3">
                            <div>
                            {props.item.text}
                            </div>
                            <div>
                                <button type="button" onClick={() => context.toggle(props.item.key)} className="btn btn-sm btn-success me-1">{!props.item.done ? 'done' : 'undone'}</button>
                                <button type="button" onClick={() => setEdit(true)} className="btn btn-info btn-sm me-1">edit</button>
                                <button type="button" onClick={()=> context.delete(props.item.key)} className="btn btn-danger btn-sm ml-1">delete</button>
                            </div>
                        </div>
                    </div>
                )
                
                : <Edittodo text={props.item.text} edit={edittodo}/>



            }
        </>

    )


        
    
}


export default Todo 