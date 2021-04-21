import { connect } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/Header'
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';
import './App.css';
import { getCharacters } from './actions/index'


function App(props) {
const {loading, error, getCharacters} = props

useEffect(() => {
  getCharacters();
}, [])



  return (
    <div className="container">
      <Header />
      <SearchForm />
      {
        (error !== "") && <h3>{error}</h3>
      }
      {
      loading ? <h3>Loading...</h3> : <CharacterList/>
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, { getCharacters })(App);
