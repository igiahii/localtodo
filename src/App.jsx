import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss'


// import components 
import Header from './components/Layout/Header'
import Addingtodo from './components/Todo/Addingtodo'
import Todo from './components/Todo/Todo'
import TodoList from './components/Todo/TodoList'

//import context
import todoscontext from './Context/app';

class App extends React.Component{
    state = {
        Todo:[] 

    
    }



    addtodo(text){
        
        
       
        this.setState(prevState =>{
            return{
                Todo :[
                    ...prevState.Todo ,
                    {   key: Date.now() , 
                        text ,
                        done: false
                    }
                ]
                
            }
        })

    }

 
    deletetodo(key){

        this.setState(prevState => {

            return{
                Todo : prevState.Todo.filter(item => item.key !== key)
                                

            }
        })
    }


    toggletodo(key){
        let {Todo} = this.state
        let item = Todo.find(item => item.key === key)
        console.log(item);
        item.done = ! item.done
        console.log(item);
        
        let newtodo = Todo.filter(item => item.key !== key)
        this.setState({
           
                Todo:[
                    ...newtodo,
                    item 

                ]

            
        })

    }

    editTodo(key , text){
        let {Todo} = this.state
        let item = Todo.find(item => item.key === key)
     
        item.text = text
    
        
        let newtodo = Todo.filter(item => item.key !== key)
        this.setState({
           
                Todo:[
                    ...newtodo,
                    item 

                ]

            
        })

    }

    

    render(){

       
       
    return(

        
          <todoscontext.Provider value={ { 
                        todo: this.state.Todo ,
                        add: this.addtodo.bind(this) ,
                        delete : this.deletetodo.bind(this) , 
                        toggle : this.toggletodo.bind(this) ,
                        edit : this.editTodo.bind(this)
        }
        }>
                <div className="App">

                        
                        <Header/>
                        <main>
                        <section className="jumbotron">
                            <div className="container d-flex flex-column align-items-center">
                                <h1 className="jumbotron-heading">Welcome!</h1>
                                <p className="lead text-muted">To get started, add some items to your list:</p>
                              
                                    <Addingtodo 
                                    // add={this.addtodo.bind(this)}
                                    />
                            </div>
                        </section>
                        <div className="todosList my-5">
                                <div className="container">
                                    <div className="d-flex flex-column align-items-center ">
                                    
                                    <TodoList 
                                                // todo={this.state.Todo}
                                                // delete={this.deletetodo.bind(this)}
                                                // toggle={this.toggletodo.bind(this)}
                                                // edit ={this.editTodo.bind(this)}
                                                />
                                    </div>
                            
                                </div>
                        </div>
                        </main>
                </div>
     </todoscontext.Provider>

    )
}
}

export default App ;