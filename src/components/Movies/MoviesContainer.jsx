import React from 'react'
import Movies from './Movies'
import { connect } from 'react-redux'

class MoviesContainer extends React.Component {
    componentDidMount() {
         this.props.setMovies(1)  
     }
    render() {
        return (
            <Movies movies = {this.props.movies} />
        )
    }
}

const mapStateToProps = state => ({ movies: state.movieReducer.movies })

const MapDispatchToProps = dispatch => ({ 
    setMovies: (page) => dispatch({ type: 'movies/popular' , payload: page}, ),
})


export default connect(mapStateToProps, MapDispatchToProps)(MoviesContainer)