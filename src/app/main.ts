import '../polyfills'

import { AppModule } from './app.module'
import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

if (process.env.NODE_ENV === 'production') {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppModule)
