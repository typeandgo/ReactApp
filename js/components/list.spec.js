import React from "react";
import {expect} from "chai"
import {mount,shallow} from "enzyme";
import List from "../components/list";
import Sort from "../components/sort";
import Add from "../components/add";
import Item from "../components/item.jsx"


describe("<List />", () => {
  it.skip("Should created without explosion", () => {
    const wrapper = shallow(<List />);
    expect(wrapper.find('.content')).to.have.length(1);
  });
});
