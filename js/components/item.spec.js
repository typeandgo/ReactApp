import React from "react";
import {expect} from "chai"
import {mount,shallow} from "enzyme";
import Item from "../components/item";
import Rating from "../components/rating";

describe("<Item />", () => {
  const id = 1;
  const title = "Super Mario";
  const img = "/img/mario.jpg";
  const type = "shooter";
  const rating = 2;

  it("Should created without explosion", () => {
    const wrapper = shallow(
      <Item id={id} title={title} img={img} type={type} rating={rating} />
    );
    expect(wrapper.find('.game-list__li')).to.have.length(1);
  });

  it("Should have <Rating /> component", () => {
    const wrapper = shallow(
      <Item id={id} title={title} img={img} type={type} rating={rating} />
    );
    expect(wrapper.find('Rating')).to.have.length(1);
  });

  it("Should have `id` and `rating` props", () => {
    const wrapper = shallow(
      <Item id={id} title={title} img={img} type={type} rating={rating}>
        <Rating gameId={id} rating={rating} />
      </Item>
    );
    expect(wrapper.find('Rating').prop('gameId')).to.equal(id);
    expect(wrapper.find('Rating').prop('rating')).to.equal(rating);
  });
});
