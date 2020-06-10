export const fetch = (url, options = {}, timeout = 1e4) => {
  return Promise.race([
    window.fetch(url, options),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error('Fetch request timed out')), timeout))
  ])
}
