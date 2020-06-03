import { store } from '@things-factory/shell'
import nodeRedIntegration from './reducers/node-red-integration'

export default function bootstrap() {
  store.addReducers({
    nodeRedIntegration
  })
}
