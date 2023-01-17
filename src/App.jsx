import React from "React"
import './index.css'
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App() {
    const users = [{
        userName: 'franco-amon-maldonado',
        name: 'franco maldonado',
        isFollowing: false,
    },

    {
        userName: 'Pedro_S',
        name: 'Pedro Sanchez',
        isFollowing: true,
    },

    {
        userName: 'MatiasTh',
        name: 'Matias Fernandez',
        isFollowing: true,
    }
]


return (

    <div className="user__container">

       {
        users.map(user => {
            const { userName, name, isFollowing } = user
            return (
                <TwitterFollowCard 
                key={userName}
                userName={userName} 
                InitialIsFollowing={isFollowing}>
                    {name}
                </TwitterFollowCard>
            )
        } )
       }

    </div>


)




}