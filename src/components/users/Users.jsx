import React, { Component } from 'react'
import UserItem from './UserItem'

export class Users extends Component {
    state = {
        users: [
            {
                id: 'id',
                login: "lisandralfonso1",
                avatar_url: "https://avatars0.githubusercontent.com/u/46769629?v=4",
                html_url: "https://github.com/lisandralfonso1"
            },
            {
                id: 'id',
                login: 'matthewyee92',
                avatar_url: 'https://avatars2.githubusercontent.com/u/32374888?v=4',
                html_url: 'https://github.com/MatthewYee92'
            }
        ]
    }
    render() {
        return (
            <div style={userStyle}>
              {this.state.users.map(user => (
                <UserItem key={user.id} user={user}/>
              ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr',
    gridGap: '1rm'
}

export default Users
