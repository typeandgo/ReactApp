import React from "react";
import {expect} from "chai"
import {mount,shallow} from "enzyme";
import Filter from "../components/filter";

describe("<Filter />", () => {
  let mockArray;

  beforeEach(function() {
    mockArray: [1,2,3];
  });

  it("Should created without explosion", () => {
    const wrapper = shallow(<Filter typeList={mockArray} ratingList={mockArray} />);
    expect(wrapper.find('.aside')).to.have.length(1);
  });

  it("Should have <FilterType/> and <FilterRating/> components", () => {
    const wrapper = shallow(<Filter typeList={mockArray} ratingList={mockArray} />);
    expect(wrapper.find('FilterType')).to.have.length(1);
    expect(wrapper.find('FilterRating')).to.have.length(1);
  });

  it("Should have `typeList` and `ratingList` props", () => {
    const wrapper = shallow(<Filter typeList={mockArray} ratingList={mockArray} />);
    expect(wrapper.props().typeList).to.equal(mockArray);
    expect(wrapper.props().ratingList).to.equal(mockArray);
  });
});
