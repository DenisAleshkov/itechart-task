import React from 'react'
import { connect } from 'react-redux'
import './Details.css'

class Details extends React.Component {

    render() {

        const detailList = this.props.movies.filter(item => item.id == this.props.match.params.id)[0]
        const date = new Date(detailList.release_date)
        
        return (
            <div>
                <div className="movie_card" id="bright">
                    <div className="info_section">
                        <div className="movie_header">
                            <h4>{date.getFullYear()}, {detailList.title}</h4>
                            <span className="rating">Raiting:{detailList.vote_average}</span>
                        </div>
                        <div className="movie_desc">
                            <p className="text">
                                {detailList.overview}
                            </p>
                        </div>
                    </div>
                    <div className="blur_back bright_back"  style={{ backgroundImage:`url(https://image.tmdb.org/t/p/w500/${detailList.poster_path}` }}></div>
                </div>
            </div>
        )
    }
}

const MapStateToProps = state => ({ movies: state.movieReducer.movies.moviesArray })

export default connect(MapStateToProps)(Details) 