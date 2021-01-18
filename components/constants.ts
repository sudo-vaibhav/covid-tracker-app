import { category } from './StatChart'
export const colors: {
  [key in category]: string
} = {
  confirmed: '#E8577C',
  active: '#5BA1F6',
  recovered: '#7AC789',
  deceased: '#969BA0',
}
