import React from "react";
import {expect} from "chai"
import {mount,shallow} from "enzyme";
import FilterRating from "../components/filter-rating";

describe("<FilterRating />", () => {
  const ratingList = [
    {
      key: 'a',
      value: 1
    }
  ];

  it("Should created without explosion", () => {
    const wrapper = shallow(<FilterRating ratingList={ratingList} />);
    expect(wrapper.find('.by-rating')).to.have.length(1);
  });
});
