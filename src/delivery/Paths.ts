import 'module-alias/register'
import { addAliases } from 'module-alias'
import path from 'path'

addAliases({
  '@application': path.join(__dirname, '../', 'application'),
  '@domain': path.join(__dirname, '../', 'domain'),
  '@infrastructure': path.join(__dirname, '../', 'infrastructure'),
  '@delivery': path.join(__dirname, '../', 'delivery'),
  '@main': path.join(__dirname, '../', 'main')
})
