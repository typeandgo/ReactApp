import React from "react";
import {expect} from "chai"
import {mount,shallow} from "enzyme";
import Item from "../components/item";
import * as Helpers from "../helpers/toTitleCase";

describe("<Item />", () => {
  it.skip("Should created without explosion", () => {
    const wrapper = shallow(<Item />);
    expect(wrapper.find('.game-list__li')).to.have.length(1);
  });
});
