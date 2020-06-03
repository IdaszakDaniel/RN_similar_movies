const movies = [
  {
    data: { poster_path: 'poster1.png', id: 1 },
    title: 'Pulp Fiction',
    name: 'Pulp Fiction'
  },
  {
    data: { poster_path: 'poster2.png', id: 2 },
    title: 'Die Hard',
    name: 'Die Hard'
  },
  {
    data: { poster_path: 'poster2.png', id: 2 },
    title: 'Harry Potter',
    name: 'Harry Potter'
  }
]

const singleMovie = [
  {
    data: { poster_path: 'poster1.png', id: 1 },
    title: 'Pulp Fiction',
    name: 'Pulp Fiction'
  }
]

const responses = [
  {
    results: [
      {
        poster_path: 'poster1.png',
        id: 1,
        name: 'Pulp Fiction',
        original_title: 'Pulp Fiction'
      }
    ]
  },
  {
    results: [
      {
        poster_path: 'poster2.png',
        id: 2,
        name: 'Die Hard',
        original_title: 'Die Hard'
      }
    ]
  },
  {
    results: [
      {
        poster_path: 'poster3.png',
        id: 1,
        name: 'Harry Potter',
        original_title: 'Harry Potter'
      }
    ]
  }
]

export { movies, singleMovie, responses }
