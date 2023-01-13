import Block from "../../../utils/block";

import item from "./item.tml";
import './item.scss'

interface IItem {
  img: string;
  description: string;
  price: number;
}

class Item extends Block {
  constructor(props?: IItem) {
    super("div", props);
  }

  render() {
    return this.setTemplate(item, this.props);
  }
}

export default Item;
