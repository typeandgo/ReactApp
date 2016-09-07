import React from "react";
import {expect} from "chai"
import {mount,shallow} from "enzyme";
import App from "../components/app";
import Filter from "../components/filter";
import List from "../components/list";

describe("<App />", () => {
  it("Should created without explosion", () => {
    const wrapper = shallow(
      <App params={{filterCategory: "all"}}/>
    );
    expect(wrapper.find('.container')).to.have.length(1);
  });

  it("Should have <Filter/> and <List/> components", () => {
    const wrapper = shallow(
      <App params={{filterCategory: "all"}} />
    );
    expect(wrapper.find('Filter')).to.have.length(1);
    expect(wrapper.find('List')).to.have.length(1);
  });
});
