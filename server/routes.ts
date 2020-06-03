import { secureRouter } from '@things-factory/auth-base'
import { IntegrationRouter } from './routers/integration-router'

process.on('bootstrap-module-history-fallback' as any, (app, fallbackOption) => {
  var paths = ['integration']
  fallbackOption.whiteList.push(`^\/(${paths.join('|')})($|[/?#])`)
})

process.on('bootstrap-module-route' as any, (app, routes) => {
  secureRouter.use('/integration', IntegrationRouter.routes(), IntegrationRouter.allowedMethods())
})
