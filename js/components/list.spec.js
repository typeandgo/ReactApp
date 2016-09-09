import React from "react";
import {expect} from "chai"
import {mount,shallow} from "enzyme";
import List from "../components/list";
import Sort from "../components/sort";
import Add from "../components/add";
import Item from "../components/item.jsx"

describe("<List />", () => {
  const gameList = [
    {
      id: 1,
      title: "Super Mario",
      img: "/img/mario.jpg",
      type: "shooter",
      rating: 2
    }
  ];
  const filterCategory = 'a';
  const filterValue = 1;

  it("Should created without explosion", () => {
    const wrapper = shallow(<List gameList={gameList}/>);
    expect(wrapper.find('.content')).to.have.length(1);
  });

  it("Should have <Sort /> and <Add /> components", () => {
    const wrapper = shallow(<List gameList={gameList}/>);
    expect(wrapper.find('Sort')).to.have.length(1);
    expect(wrapper.find('Add')).to.have.length(1);
  });

  it("Should have `filterCategory` and `filterValue` props", () => {
    const wrapper = shallow(<List gameList={gameList} filterCategory={filterCategory} filterValue={filterValue} />);
    expect(wrapper.find('Sort').prop('filterCategory')).to.equal(filterCategory);
    expect(wrapper.find('Sort').prop('filterValue')).to.equal(filterValue);
  });
});
