import Config from 'react-native-config'

export const tastedive = (
  key,
  type,
  result
) => `${Config.TASTEDIVE_LINK}?k=${key}&type=${type}&q=${result}`

export const themoviedb = (query, key) => `${Config.THE_MOVIE_DB_LINK}${query}&api_key=${key}`
