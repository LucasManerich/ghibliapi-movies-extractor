import Movie from './Movie'

export default class MovieImpl implements Movie {
  public constructor (
    private readonly id: string,
    private readonly name: string,
    private readonly originalName: string,
    private readonly releaseDate: Date,
    private readonly score: number,
    private readonly description?: string
  ) {}

  public getId () {
    return this.id
  }

  public getName () {
    return this.name
  }

  public getOriginalName () {
    return this.originalName
  }

  public getDescription () {
    return this.description
  }

  public getReleaseDate () {
    return this.releaseDate
  }

  public getScore () {
    return this.score
  }
}
