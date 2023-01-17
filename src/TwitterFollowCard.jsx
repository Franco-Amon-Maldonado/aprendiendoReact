import { useState } from 'react'
import './TwitterFollowCard.css'

export function TwitterFollowCard ({userName='Desconocido', children, InitialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(InitialIsFollowing)
    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName = isFollowing ? 'aside__boton isFollow' : 'aside__boton'
    
    const handleClick = ()=>{
        setIsFollowing(!isFollowing)   
    }

    return (

        <article className="info__container">

            <header className="info__header">
                <img 
                    className="info__avatar"
                    alt={`Avatar de ${userName}`} 
                    src= {`https://unavatar.io/${userName}`}/>
                
                <div className="info__user">
                    {children}
                    <span className="info__userName">{userName}</span>
                </div>
                
            </header>
            

            <aside className="aside__container">
                   <button onClick={handleClick} className={buttonClassName}>
                        <span className='aside__text'>{text}</span>
                        <span className="aside__stopFollow">Dejar de seguir</span>
                   </button>
            </aside>
    


        </article>

    )

}