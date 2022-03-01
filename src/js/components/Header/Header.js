import { h, text } from "hyperapp";
import "./Header.scss";

const links = ["home", "about", "contact us"];

const Header = ({ count, setCount }) => {
  return h("div", { class: "header__container" }, [
    h("div", { class: "left" }, [
      h("img", {
        width: "50",
        src: "http://localhost:8080/Icons/Icons/google-spanner-logo.png",
      }),
    ]),
    h(
      "div",
      { class: "right" },
      h(
        "ul",
        {},
        links.map((name) =>
          h("li", { onclick: setCount }, text(`${count}${name}`))
        )
      )
    ),
  ]);
};

export default Header;
