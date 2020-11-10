import React from 'react'
import Movie from './Movie'

class Movies extends React.Component {
    render() {
        
        const movieList = this.props.movies.moviesArray.map(item => { // NO NEED TO CREATE SEPARATE ARRAY OF MOVIES, JUST RENDER IT DIRECTLY IN "render" METHOD OR CREATE A FUNCTION THAT WILL RETURN THIS LIST
            return <Movie
                key={item.id}
                id={item.id}
                backdrop={item.backdrop_path}
                poster={item.poster_path}
                title={item.title}
                date={item.release_date}
                raiting={item.vote_average}
            />
        })
        return (
            <div>{movieList}</div>
        )
    }
}


export default Movies
