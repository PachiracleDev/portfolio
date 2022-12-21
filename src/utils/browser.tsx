export const isBrowser = typeof window !== "undefined"
// Server o cliente (browser)

export const isomorphicWindow = isBrowser ? window : undefined
export const isomorphicDocument = isBrowser ? document : undefined

export function getScrollbarWidth() {
    return isBrowser ? window.innerWidth - document.documentElement.clientWidth : 0
}