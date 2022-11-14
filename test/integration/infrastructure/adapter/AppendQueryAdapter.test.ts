import AppendQueryAdapter from '@infrastructure/adapter/append-query/AppendQueryAdapter'

test('Deverá adicionar definir o valor da QueryString de uma URL', () => {
  const appendQueryAdapter = new AppendQueryAdapter()
  const output = appendQueryAdapter.appendQuery('https://google.com', { teste: 'valor' })
  expect(output).toEqual('https://google.com/?teste=valor')
})

test('Deverá adicionar um novo valor a QueryString de uma URL', () => {
  const appendQueryAdapter = new AppendQueryAdapter()
  const output = appendQueryAdapter.appendQuery('https://google.com/?query=exists', { teste: 'valor' })
  expect(output).toEqual('https://google.com/?query=exists&teste=valor')
})

test('Deverá atualizar o valor de um parâmtro da QueryString de uma URL', () => {
  const appendQueryAdapter = new AppendQueryAdapter()
  const output = appendQueryAdapter.appendQuery('https://google.com/?query=exists', { query: 'updated' })
  expect(output).toEqual('https://google.com/?query=updated')
})
