import React from "react";
import {expect} from "chai"
import {mount,shallow} from "enzyme";
import App from "../components/app";
import Filter from "../components/filter";
import List from "../components/list";

describe("<App />", () => {
  const params = {
    filterCategory: 'a',
    filterValue: 1
  };

  it("Should created without explosion", () => {
    const wrapper = shallow(<App params={params} />);
    expect(wrapper.find('.container')).to.have.length(1);
  });

  it("Should have <Filter/> and <List/> components", () => {
    const wrapper = shallow(<App params={params} />);
    expect(wrapper.find('Filter')).to.have.length(1);
    expect(wrapper.find('List')).to.have.length(1);
  });

  it("Should have `filterCategory` and 'filterValue' props", () => {

    const wrapper = shallow(<App params={params} />);
    expect(wrapper.find('Filter').prop('filterCategory')).to.equal('a');
    expect(wrapper.find('Filter').prop('filterValue')).to.equal(1);
    expect(wrapper.find('List').prop('filterCategory')).to.equal('a');
    expect(wrapper.find('List').prop('filterValue')).to.equal(1);
  });
});
