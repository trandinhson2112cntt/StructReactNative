export interface IActionTyped<T = {}> {
    type: string
    payload?: T | null
    meta?: any
    error?: any | null
  }
  