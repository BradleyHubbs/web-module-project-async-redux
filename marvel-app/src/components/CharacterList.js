import React from 'react'
import { useEffect } from 'react'
import { connect, useSelector} from 'react-redux';
import { fetchData } from '../store'

const CharacterList = (props) => {

    useEffect(() => {
        props.fetchData();
    }, [])

    return (
        <div>
            <h1>Rick and Morty Characters</h1>
            <div className='charcontainer'>
                {props.characters.map((char) =>(
            
                    <div key={char.id} className='charbox'>
                        <p>{char.name}</p>
                        <img src={char.image} alt=''></img>
                    </div>
                    
                ))}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
    }
}

export default connect(mapStateToProps, { fetchData })(CharacterList);
