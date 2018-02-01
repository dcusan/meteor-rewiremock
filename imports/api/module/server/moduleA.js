import modB from '/imports/api/module/server/moduleB.js'

export default {
  doA
}

export function doA() {
  return `A${modB.doB()}`
}
