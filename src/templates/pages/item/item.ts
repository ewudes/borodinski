import Block from "../../../core/block";
import Header from "../../blocks/header/header";
import Breadcrumbs from "../../../components/breadcrumbs/breadcrumbs";
import Footer from "../../blocks/footer/footer";

import item from "./item.tml";
import "./item.scss";

class Item extends Block {
  constructor(props: Record<string, any> = {}) {
    const header = new Header();
    const breadcrumbs = new Breadcrumbs();
    const footer = new Footer();


    super("div", {
      header,
      breadcrumbs,
      footer,
      ...props
    });
  }

  render() {
    return this.setTemplate(item, this.props);
  }
}

export default Item;
