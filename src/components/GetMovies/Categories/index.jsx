// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './style.css';
// import { Link } from "react-router-dom";
// import { UpcomingMovies } from '../../../utils/utilities';

// const Categories = () => {
//   const [upcomingMovies, setUpcomingMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     (async () => {
//       try {
//         const upcomingMovie = await UpcomingMovies();
//         console.log("API Response:", upcomingMovie);
//         setUpcomingMovies(upcomingMovie);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//         setLoading(false);
//       }
//     })();
//   }, []);
//   if (loading) {
//     return <h4>Loading movies...</h4>;
//   }
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     previousArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings} className="categoryContainer">
//           upcomingMovies.map((movies) =& (
//             <Link className="image-link">
//               <div className="image-container" style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGE_BASE_URL}${movie.poster_path})` }}>
//                 <div className="movie-info-overlay">
//                   <h3>{movie.title}</h3>
//                   <p>{movie.overview}</p>

//                   <div className="buttons-container">
//                     <button className="watchButton">Watch Now</button>
//                     <button className="favoritesButton">Add to Favorites</button>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))
//       </Slider>
//     </div>
//   );
// };
// const CustomPrevArrow = (props) => {
//   const { onClick } = props;
//   return <button className="custom-arrow prev-arrow" onClick={onClick}>&#10094;</button>;
// };
// const CustomNextArrow = (props) => {
//   const { onClick } = props;
//   return <button className="custom-arrow next-arrow" onClick={onClick}>&#10095;</button>;
// };
// export default Categories;
