import React from 'react'
import todoscontext from '../../Context/app'


// function Addingtodo(props){

//     const [text,setText] = useState('')
//     const context = useContext(todoscontext)

//     let formhandler = e => {
//         e.preventDefault()
//         context.add(text)
//         setText('')
//     }

//     let inputhandler = e => {
//        return setText(e.target.value)     
//     }
//     return(

//      <form className="d-flex form-group" onSubmit={formhandler}>
//          <input className="form-control me-2 " type="search" placeholder="i want to do this..." value={text} onChange={inputhandler} aria-label="Search"/>
//          <button type="submit" className="btn btn-primary" type="submit">Add</button>
//      </form>
//     )
// }

// export default Addingtodo;

class Addingtodo extends React.PureComponent{
    state ={ 
        text : ''
    }
    static contextType = todoscontext ;

    formhandler(e){
        e.preventDefault()
        this.context.add(this.state.text)
        this.setState({text : ''})
    }

    inputhandler(e){
        return this.setState({text : e.target.value})  

    }
    render(){


        return(

            <form className="d-flex form-group" onSubmit={this.formhandler.bind(this)}>
                <input className="form-control me-2 " type="search" placeholder="i want to do this..." value={this.state.text} onChange={this.inputhandler.bind(this)} aria-label="Search"/>
                <button type="submit" className="btn btn-primary" type="submit">Add</button>
            </form>
           )

    }
}
export default Addingtodo;