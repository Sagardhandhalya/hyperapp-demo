import { h } from "hyperapp";
import Header from "../Header/Header";
import Main from "../Main/Main";

const Layout = (state) => {
  return h("div", {}, [
    Header({ count: state.count, setCount: state.addOne }),
    Main(state),
  ]);
};

export default Layout;
