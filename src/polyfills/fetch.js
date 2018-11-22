const fetch = []

// https://caniuse.com/#feat=fetch
if (!window.fetch) {
  // You should load the polyfill directly via:
  //
  // fetch.push(import(/* webpackChunkName: "polyfill-fetch" */ 'whatwg-fetch'))
  //
  // but for demo purposes we will delay the load

  fetch.push(new Promise((resolve, reject) => {
    console.debug('Polyfill for "fetch" is required')

    window.setTimeout(async () => {
      await import(/* webpackChunkName: "polyfill-fetch" */ 'whatwg-fetch')
      console.debug('Polyfill for "fetch" loaded')
      resolve()
    }, 3000)
  }))
}

export default fetch
