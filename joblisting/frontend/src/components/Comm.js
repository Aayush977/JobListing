import  React, {Component} from 'react';

class Comm extends Component {
    constructor(){
    state = {
        comment:''
    }
    }
    loadComment() {
        const thisComm = this;
        const endpoint = 'http://127.0.0.1:8000/api/comment/'
        let lookupOptions = {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
            
        }
        fetch(endpoint, lookupOptions)
        .then((response) => response.json())
        .then((responseData) =>
            
            thisComm.setState = ({
                comment: responseData
            }))
        .catch(function(error){
            console.log("error", error)
        })
            
    }
    componentDidMount(){
        this.loadComment()
    }
    render() {
        
        return (
            <div>
                <h1>Comment section</h1>
                    {state.comment.map((commentsAll) => (
                      <h1>{commentsAll.desc}</h1>  
                    )

                    )}
            
            </div>
            );
        }
            
        
    
    
    
    
}

export default Comm;