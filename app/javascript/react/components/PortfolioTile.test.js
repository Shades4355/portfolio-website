import React from "react"
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import PortfolioTile from './PortfolioTile'

let key = 1
let name = "Lynx Pictures"
let description = "Cute pictures of my cat Lynx"
let url = 'https://www.google.com'

let wrap = mount(
  <PortfolioTile
    key={key}
    name={name}
    description={description}
    url={url}
  />)

describe("PortfolioTile 'Test'", () => {
  it("Users should see the name of a repo, in this case 'Lynx Pictures'", () => {
    expect(wrap.text()).toContain("Lynx Pictures")
  })
  it("Users should see a description of the repo", () => {
      expect(wrap.text()).toContain("Cute pictures of my cat Lynx")
  })
})
