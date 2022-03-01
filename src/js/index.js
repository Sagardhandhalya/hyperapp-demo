import { h, text, app } from "hyperapp";
import Layout from "./components/Layout/Layout";
import initialState from "./state";

const node = document.getElementById("app");

const view = (state) => h("div", {}, [Layout(state)]);

app({ init: initialState, view, node });
