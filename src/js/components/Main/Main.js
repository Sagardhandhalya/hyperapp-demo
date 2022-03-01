import { h } from "hyperapp";
import connectToDbForm from "../ConnectToDbForm/ConnectToDbForm";

const Main = (state) => {
  return h("div", { class: "main__container" }, [connectToDbForm(state)]);
};

export default Main;
