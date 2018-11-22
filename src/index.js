console.debug('Booting...')

import app from './app'
import polyfills from './polyfills'

const start = () => {
  const root = document.getElementById('root')

  root.innerHTML += app()
}

Promise.all(polyfills)
  .then(() => {
    try {
      start()

      console.debug('Started')
    }
    catch (error) {
      console.error('Failed to start the app', error)
    }
  })
  .catch((error) => {
    console.error('Failed fetching polyfills', error)
  })
