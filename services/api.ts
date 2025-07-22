export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
}

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  })

  if (!response.ok) {
    // @ts-ignore
    throw new Error("Dailed to fetch movies", response.statusText)
  }

  const data = await response.json()

  return data
}

export const fetchMovieDetails = async (movideId: string): Promise<MovieDetails> => {
  try {
    const response = await fetch(
      `${TMDB_CONFIG.BASE_URL}/movie/${movideId}?api_key=${TMDB_CONFIG.API_KEY}`,
      {
        method: "GET",
        headers: TMDB_CONFIG.headers,
      },
    )

    if (!response.ok) {
      throw new Error("Failed to fetch movie details")
    }

    const data = await response.json()

    return data
  } catch (error) {
    throw error
  }
}

// const url =
//   "https://api.themoviedb.org/3/keyword/keyword_id/movies?include_adult=false&language=en-US&page=1"
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWU4NTE2ODA4OTk2YjhjNjI4MThhYzZkNzY2MDNhYSIsIm5iZiI6MTc1MjU2OTQxNC41ODIsInN1YiI6IjY4NzYxNjQ2Y2M2ZGIzYmQyYTYzNzMyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wkEXQzdoVIW9KiM49iFoIrFNSjQyjickr3lSvDxPCi0",
//   },
// }

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err))
