import swaggerAutogen from 'swagger-autogen'

const doc = {
  info: {
    version: '1.0.0',
    title: 'API Ghibli Movies',
    description: 'API para interação do os conteúdos da produtora Studio Ghibli.'
  },
  host: 'localhost:3000',
  basePath: '/api/v1',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Movies',
      description: 'Endpoints de interação com a API de filmes'
    }
  ],
  definitions: {
    Movie: {
      id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
      name: 'Castle in the Sky',
      original_name: '天空の城ラピュタ',
      score: 94,
      release_year: 1986,
      description: "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world."
    },
    MovieList: [{ $ref: '#/definitions/Movie' }]
  }
}

const outputFile = '../src/delivery/swagger-output.json'
const endpointsFiles = ['../src/delivery/http-server/express/ExpressRouter.ts']

swaggerAutogen(outputFile, endpointsFiles, doc)
