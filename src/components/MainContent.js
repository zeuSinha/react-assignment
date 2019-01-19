import React from 'react'

import Users from './../components/Users'

class MainContent extends React.Component{
    render(){
        const styles = {
            fontSize:'30px',
            textDecoration: 'underline' ,
            fontStyle : 'italic', 
            color: '#483D8B'
        }
        return(
            <div>
                <h3 style={styles}>Latest 100 users:</h3>
                <Users />
            </div>
        )
    }
}

export default MainContent