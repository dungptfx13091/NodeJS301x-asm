import React from 'react';

import MovieList from '../../components/browse/MovieList';
import requests from '../../utils/requests';
import Banner from '../../components/browse/Banner';
import Nav from '../../components/browse/Nav';

import './Browse.css';

function Browse() {
	console.log(requests.fetchTrending);
	return (
		<div className="app">
			<Nav />
			<Banner />
			<MovieList title="Xu hướng" fetchUrl={'http://localhost:3001/api/movies/trending'} />
			<MovieList title="Xếp hạng cao" fetchUrl={'http://localhost:3001/api/movies/top-rate'} />
			<MovieList title="Hành động" fetchUrl={"http://localhost:3001/api/movies/discover?genreId=28"} />
			<MovieList title="Hài" fetchUrl={"http://localhost:3001/api/movies/discover?genreId=35"} />
			<MovieList title="Kinh dị" fetchUrl={"http://localhost:3001/api/movies/discover?genreId=27"} />
			<MovieList title="Lãng mạn" fetchUrl={"http://localhost:3001/api/movies/discover?genreId=10749"} />
			<MovieList title="Tài liệu" fetchUrl={"http://localhost:3001/api/movies/discover?genreId=99"} />
					</div>
	);
}

export default Browse;

