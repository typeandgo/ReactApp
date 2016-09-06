import React from "react";
import {expect} from "chai"
import {mount,shallow} from "enzyme";
import App from "../components/app";
import Filter from "../components/filter";
import List from "../components/list";

describe("<App />", () => {
  it.skip("Should created without explosion", () => {
    const wrapper = shallow(
      <App filterCategory={"all"} />
    );
    expect(wrapper.find('.container')).to.have.length(1);
  });
});
