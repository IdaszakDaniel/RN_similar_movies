export const tastedive = (key, type, result) => `https://tastedive.com/api/similar?k=${key}&type=${type}&q=${result}`

export const themoviedb = (query, key) => `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${key}`
