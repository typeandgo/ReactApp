import React from "react";
import {expect} from "chai"
import {mount,shallow} from "enzyme";
import FilterType from "../components/filter-type";

describe("<FilterType />", () => {
  const typeList = [
    {
      key: 'a',
      value: 1
    }
  ];

  it("Should created without explosion", () => {
    const wrapper = shallow(<FilterType typeList={typeList} />);
    expect(wrapper.find('.by-type')).to.have.length(1);
  });
});
