import { store } from '@things-factory/shell'
import nodeRedIntegrationBase from './reducers/node-red-integration'

export default function bootstrap() {
  store.addReducers({
    nodeRedIntegrationBase
  })
}
