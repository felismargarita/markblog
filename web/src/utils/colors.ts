import {random} from 'lodash'
export const colors = ['#F47E60','#67CC86','#E15B64','#849B87','#F8B26A']

export const randomColor = ()=>{
  return colors[random(0,colors.length - 1)]
}