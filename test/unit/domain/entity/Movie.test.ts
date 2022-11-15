import MovieBuider from "@domain/entity/movie/MovieBuilder"
import { faker } from '@faker-js/faker'

const movieBuilder = new MovieBuider()
  .setId(faker.datatype.uuid())
  .setName(faker.datatype.string())
  .setOriginalName(faker.datatype.string())
  .setScore(faker.datatype.number())
  .setDescription(faker.datatype.string())
  .setReleaseDate(faker.datatype.datetime())

test('deverá retornar o ano de lançamento do filme', () => {
  const movie = movieBuilder.build()
  const releaseYear = movieBuilder.getReleaseDate().getFullYear()
  expect(movie.getReleaseYear()).toEqual(releaseYear)
})

test('deverá retornar a idade do filme', () => {
  const movie = movieBuilder.build()
  const currentDate = new Date()
  const age = currentDate.getFullYear() - movieBuilder.getReleaseDate().getFullYear()
  expect(movie.getAge()).toEqual(age)
})