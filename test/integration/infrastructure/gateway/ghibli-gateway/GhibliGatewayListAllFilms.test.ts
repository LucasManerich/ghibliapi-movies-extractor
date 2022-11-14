import AppendQueryAdapter from '@infrastructure/adapter/append-query/AppendQueryAdapter'
import AxiosAdapter from '@infrastructure/adapter/axios/AxiosAdapter'
import GhibliApiConfig from '@infrastructure/config/GhibliApiConfig'
import GhibliListAllFilms from '@infrastructure/gateway/ghibli-gateway/endpoints/list-all-films/GhibliListAllFilms'

test('Deverá retornar a lista de filmes', async () => {
  jest.spyOn(GhibliApiConfig, 'getUrl').mockReturnValue('https://ghibliapi.herokuapp.com')
  const axiosAdapter = new AxiosAdapter()
  const appendQueryAdapter = new AppendQueryAdapter()
  const listAllFilms = new GhibliListAllFilms(axiosAdapter, appendQueryAdapter)
  const output = await listAllFilms.perform({ limit: 10, offset: 0 })
  expect(output.length).toBeGreaterThan(0)
})
