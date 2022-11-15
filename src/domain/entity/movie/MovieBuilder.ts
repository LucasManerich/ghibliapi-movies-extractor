import MovieImpl from './MovieImpl'

export default class MovieBuider {
  private id?: string
  private name?: string
  private originalName?: string
  private releaseDate?: Date
  private score?: number
  private description?: string

  public setId(id: string) {
    this.id = id
    return this
  }

  public setName(name: string) {
    this.name = name
    return this
  }

  public setOriginalName(originalName: string) {
    this.originalName = originalName
    return this
  }

  public setReleaseDate(releaseDate: Date) {
    this.releaseDate = releaseDate
    return this
  }

  public setScore(score: number) {
    this.score = score
    return this
  }

  public setDescription(description?: string) {
    this.description = description
    return this
  }

  public getId() {
    if (!this.id) throw new Error('MovieBuilder: id not set')
    return this.id
  }

  public getName() {
    if (!this.name) throw new Error('MovieBuilder: name not set')
    return this.name
  }

  public getOriginalName() {
    if (!this.originalName) throw new Error('MovieBuilder: originalName not set')
    return this.originalName
  }

  public getReleaseDate() {
    if (!this.releaseDate) throw new Error('MovieBuilder: releaseDate not set')
    return this.releaseDate
  }

  public getScore() {
    if (!this.score) throw new Error('MovieBuilder: score not set')
    return this.score
  }

  public getDescription() {
    return this.description
  }

  public build() {
    return new MovieImpl(
      this.getId(),
      this.getName(),
      this.getOriginalName(),
      this.getReleaseDate(),
      this.getScore(),
      this.getDescription()
    )
  }
}
