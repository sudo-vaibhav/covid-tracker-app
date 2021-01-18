import { abbreviate } from '@pqt/abbreviate'

export const shorthand = (num) => {
  return abbreviate(num || 0, 1)
}
