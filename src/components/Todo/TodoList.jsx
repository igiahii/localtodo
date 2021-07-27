import React, { useContext, useState } from 'react'
import todoscontext from '../../Context/app';

import Todo from './Todo' ;

function TodoList(props) {

    const [statusDone , setDone] = useState(false)
    const context = useContext(todoscontext)

    let filtertodo = context.todo.filter(item => item.done === statusDone)

    return(
        <>
                 <nav className="col-6 mb-3">
                <div className="nav nav-pills nav-fill nav-tabs" id="nav-tab" role="tablist">
                    <a className={`nav-item nav-link font-weight-bold ${!statusDone ? 'active' :''}`} id="nav-home-tab" onClick={()=> setDone(false)}>undone <span className="badge bg-danger">{context.todo.filter(item=> item.done=== false).length}</span></a>
                    <a className={`nav-item nav-link font-weight-bold ${ statusDone  ? 'active' :''}`}  id="nav-profile-tab " onClick={()=> setDone(true)}>done <span className="badge bg-success">{context.todo.filter(item=> item.done=== true).length}</span></a>
                </div>
            </nav>


            {   filtertodo.length === 0
                ? <p>there isn't any todos</p>
                : filtertodo.map(item => <Todo  key={item.key} 
                                                item={item} 
                                                // delete={props.delete}
                                                // toggle={props.toggle}
                                                // edit ={props.edit}
                                                />)
            
            } 
    </>
    )
}

export default TodoList ;