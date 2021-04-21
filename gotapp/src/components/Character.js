import React from 'react'

const Character = (props) => {
    const { character } = props;
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={character.image} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{character.name}</h1>
                    <ul>
                        <li>
                            <strong>House Name: </strong>{character.house}
                        </li>
                        <li>
                            <strong>Land of origin: </strong>{character.origin[0]}
                        </li>
                        <li>
                            <strong>Status: </strong> {character.alive=true ? <span>Dead</span> : <span>Alive</span>}
                        </li>
                        <li>
                            <strong>Potrayed by: </strong>{character.actor}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Character;


{/* <div className='card'>
<h3>{character.name}</h3>
<img src={character.image} alt={character.name} />
<p>{character.house}</p>
<p>{character.origin[0]}</p>
<p>{character.alive=true ? <p>Dead</p> : <p>Alive</p> }</p>
</div> */}