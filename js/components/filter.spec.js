import React from "react";
import {expect} from "chai"
import {mount,shallow} from "enzyme";
import Filter from "../components/filter";

describe("<Filter />", () => {
  const typeList = ['a','b','c'];
  const ratingList = [1,2,3];

  it("Should created without explosion", () => {
    const wrapper = shallow(<Filter typeList={typeList} ratingList={ratingList} />);
    expect(wrapper.find('.aside')).to.have.length(1);
  });

  it("Should have <FilterType/> and <FilterRating/> components", () => {
    const wrapper = shallow(<Filter typeList={typeList} ratingList={ratingList} />);
    expect(wrapper.find('FilterType')).to.have.length(1);
    expect(wrapper.find('FilterRating')).to.have.length(1);
  });

  it("Should have `typeList` and `ratingList` props", () => {
    const wrapper = shallow(<Filter typeList={typeList} ratingList={ratingList} />);
    expect(wrapper.find('FilterType').prop('typeList')).to.equal(typeList);
    expect(wrapper.find('FilterRating').prop('ratingList')).to.equal(ratingList);
  });
});
