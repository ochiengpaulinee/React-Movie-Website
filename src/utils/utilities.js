const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

export const getMovies=async()=>{
    try{
        const response = await fetch(`${BASE_URL}/3/movie/popular`,{
            method:'GET',
            headers:{
                Authorization:`Bearer ${ACCESS_TOKEN}`,
                'Content-Type':'application/json'
            }
        })
        const result=  await response.json();
        return result
    }
    catch(error){
        return error.message;
    }
};

export const search = async (query) => {
    try {
      const response = await fetch(
        `${BASE_URL}/3/search/movie?query=${query}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
          }
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return error.message;
    }
  };


  export const UpcomingMovies = async (movieIds) => {
    try {
      const response = await fetch(`${BASE_URL}/3/movie/upcoming`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch upcoming movies.");
      }
      const data = await response.json();
      const movies = data.results || [];
      const selectedMovies = movies.filter((movie) => movieIds.includes(movie.id));
      return selectedMovies;
    } catch (error) {
      console.error('Error fetching upcoming movies:', error);
      return [];
    }
  };