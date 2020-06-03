import Config from 'react-native-config'

export const tastedive = (type, result) =>
  `${Config.TASTEDIVE_LINK}?k=${Config.TASTEDIVE_KEY}&type=${type}&q=${result}`

export const themoviedb = query =>
  `${Config.THE_MOVIE_DB_LINK}${query}&api_key=${Config.API_KEY}`
