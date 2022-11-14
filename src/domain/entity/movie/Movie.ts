export default interface Movie {
  getId(): string
  getName(): string
  getOriginalName(): string
  getDescription(): string|undefined
  getReleaseDate(): Date
  getScore(): number
}
