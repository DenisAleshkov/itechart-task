import React from 'react'
import { connect } from 'react-redux'

class Details extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                Details
            </div>
        )
    }
}

const MapStateToProps = state => ({movies: state.movieReducer.movies.moviesArray})

export default connect(MapStateToProps)(Details) 