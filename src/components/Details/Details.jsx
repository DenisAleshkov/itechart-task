import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './../Movies/Movies.css'

class Details extends React.Component {

    render() {

        const detailList = this.props.movies.filter(item => item.id === +this.props.match.params.id)[0]
        const date = new Date(detailList.release_date)
        const { 
            title, 
            overview, 
            poster_path,
            vote_average
         } = detailList

        return (
            <div>
                <div className="movie_card" id="bright">
                    <div className="info_section">
                        <div className="movie_header">
                            <h1>{title}</h1>
                            <h4>{date.getFullYear()}</h4>
                            <span className="rating">Raiting:{vote_average}</span>
                        </div>
                        <div className="movie_desc">
                            <p className="text">
                                {overview}
                            </p>
                        </div>
                        <div className="movie_button">
                            <Link className="btn" to='/'>Back<span className="arrow right">❯</span></Link>
                        </div>
                    </div>
                    <div className="blur_back bright_back"  style={{ backgroundImage:`url(https://image.tmdb.org/t/p/w500/${poster_path}` }}></div>
                </div>
            </div>
        )
    }
}

const MapStateToProps = state => ({ movies: state.movieReducer.movies.moviesArray })

export default connect(MapStateToProps)(Details) 