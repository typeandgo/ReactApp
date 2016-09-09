import React from "react";
import {expect} from "chai"
import {mount,shallow} from "enzyme";
import Sort from "../components/sort";

describe("<Sort />", () => {
  it("Should created without explosion", () => {
    const wrapper = shallow(<Sort />);
    expect(wrapper.find('.game-sort')).to.have.length(1);
  });
});
