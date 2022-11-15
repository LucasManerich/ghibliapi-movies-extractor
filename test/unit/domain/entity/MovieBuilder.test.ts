import MovieBuider from "@domain/entity/movie/MovieBuilder"
import { faker } from '@faker-js/faker'

const movieBuilder = new MovieBuider()
  .setId(faker.datatype.uuid())
  .setName(faker.datatype.string())
  .setOriginalName(faker.datatype.string())
  .setScore(faker.datatype.number())
  .setDescription(faker.datatype.string())
  .setReleaseDate(faker.datatype.datetime())

test('testa o builder responsável pela criação da entidade "Movie"', () => {
  const movie = movieBuilder.build()
  expect(movie.getId()).toEqual(movieBuilder.getId())
  expect(movie.getName()).toEqual(movieBuilder.getName())
  expect(movie.getOriginalName()).toEqual(movieBuilder.getOriginalName())
  expect(movie.getScore()).toEqual(movieBuilder.getScore())
  expect(movie.getReleaseDate()).toEqual(movieBuilder.getReleaseDate())
})