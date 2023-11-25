import { proxy, subscribe } from 'valtio'

export const state = proxy({ isBrocheHovered: false })

export const subscribeToState = (callback) => {
  return subscribe(state, callback)
}
