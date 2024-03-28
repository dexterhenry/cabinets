// import { API_URL } from "../config/constant"
import data from "../mocks/data.json"
export const searchMovies = async ({ search }) => {
  try {
    // const response = await fetch(`${API_URL}${search}`)
    // const json = await response.json()

    const movies = data.Search.filter((item) => item.Title.includes(search))

    return movies?.map((movie) => ({
      id: movie.Title,
      title: movie.Title,
      year: movie.Description,
      poster: movie.Poster,
      price: movie.Price,
    }))
  } catch (error) {
    throw new Error("Error searchin movies")
  }
}
