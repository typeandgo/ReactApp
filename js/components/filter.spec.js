import React from "react";
import {expect} from "chai"
import {mount,shallow} from "enzyme";
import Filter from "../components/filter";

describe("<Filter />", () => {
  it.skip("Should created without explosion", () => {
    const wrapper = shallow(
      <Filter />
    );
    expect(wrapper.find('.filter-category')).to.have.length(3);
  });
});
