import React from "react";
import {expect} from "chai"
import {mount,shallow} from "enzyme";
import Rating from "../components/rating";

describe("<Rating />", () => {
  it("Should created without explosion", () => {
    const wrapper = shallow(<Rating />);
    expect(wrapper.find('.game-rating')).to.have.length(1);
  });

  it("Should have 5pcs ``star` elements", () => {
    const wrapper = shallow(<Rating />);
    expect(wrapper.find('.star')).to.have.length(5);
  });
});
