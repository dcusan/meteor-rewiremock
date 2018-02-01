import rewiremock, { addPlugin, removePlugin, plugins } from 'rewiremock'
import { expect } from 'chai'
import modA from '/imports/api/module/server/moduleA.js'

describe('moduleA', () => {
  beforeEach(() => rewiremock.enable())
  afterEach(() => rewiremock.disable())

  it('lets moduleB be used', () => {
    expect(modA.doA()).to.equal('AB')
  })

  it('lets moduleB be mocked', () => {
    addPlugin(plugins.relative)
    rewiremock('/imports/api/module/server/moduleB.js').with({
      doB: () => 'A'
    })

    expect(modA.doA()).to.equal('AA')

    removePlugin(plugins.relative)
  })
})
