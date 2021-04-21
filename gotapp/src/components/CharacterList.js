import React from 'react';
import { connect } from 'react-redux';
import Character from './Character';


const CharacterList = props => {
    const { characters } = props;
    return (
        <section className='cards'>
            {characters.map(character => {
                return(
                    <Character character={character} />
                )
            })}
        </section>
    )
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps)(CharacterList);
