import React from 'react'
import Movies from './Movies'
import { connect } from 'react-redux'
import { requestMovies } from '../../redux/actions'

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

const MapDispatchToProps = dispatch => ({ setMovies: (page) => dispatch(requestMovies(page)) })

export default connect(mapStateToProps, MapDispatchToProps)(MoviesContainer)