import React from "react";
import {expect} from "chai"
import {mount,shallow} from "enzyme";
import App from "../components/app";
import Filter from "../components/filter";
import List from "../components/list";

describe("<App />", () => {
  it("Should created without explosion", () => {
    let wrapper = shallow(
      <App>
        <Filter />
        <List />
      </App>
    );
    expect(wrapper.find('.container')).to.have.length(1);
  });
});
