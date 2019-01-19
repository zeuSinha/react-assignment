import React from 'react'
import './Users.css'

class Users extends React.Component{
    constructor(){
        super()
        this.state = {
            error : null,
            isLoaded : false,
            users : []
        }
    }

    componentDidMount(){
        fetch(`https://api.github.com/users?per_page=100&since=100; rel="prev"`)
            .then(data => data.json())
            .then(
                result => {
                    let allUser = result.map(user=>{
                        return(
                            <div key= {user.id}>
                                <p>{user.login}</p>
                            </div>
                        )
                    })
                    this.setState({
                        isLoaded : true,
                        users : allUser
                    })
                },
                error => {
                    this.setState({
                        isLoaded : true,
                        error
                    })
            })
            // console.log(this.state.users)
    }

    render(){
        const {error, isLoaded , users} = this.state

        if(error){
            return <div>Error Occured: {error.message}</div>
        }
        else if(!isLoaded)
            return <div style={{fontSize: '35px'}}>Loading....</div>
        else {
            let userName = users.map(user => {
                return <li>{user}</li>
            })
            return (
                <div style={{margin: '0 15%'}}>
                    <ol className="rounded-list">
                        {userName}
                    </ol>
                </div>
            )
        }
        
    }
}


export default Users