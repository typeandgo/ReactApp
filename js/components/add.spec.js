import React from "react";
import {expect} from "chai"
import {mount,shallow} from "enzyme";
import Add from "../components/add";

describe("<Add />", () => {
  it("Should created without explosion", () => {
    let wrapper = shallow(<Add />);
    expect(wrapper.find('.game-add')).to.have.length(1);
  });

  it("Should have 2 inputs for the `title` and `type`", () => {
    let wrapper = shallow(<Add />);
    expect(wrapper.find('input')).to.have.length(2);
  });

  it("Should have a button", () => {
    let wrapper = shallow(<Add />);
    expect(wrapper.find('button')).to.have.length(1);
  });
});
