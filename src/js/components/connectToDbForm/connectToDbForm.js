import { h, text } from "hyperapp";
import "./ConnectToDbForm.scss";

const connectToDbForm = (state) => {
  console.log("connect to db realod.");
  return h("div", { class: "form_container" }, [
    h("div", { class: "form" }, [
      h(
        "h1",
        { style: { textAlign: "center", marginBottom: "30px" } },
        text("Connect to Source Database ")
      ),
      h("form", {}, [
        h("div", { class: "form_control" }, [
          h("label", {}, text("Database Engin")),
          h(
            "select",
            {
              name: "dbEngine",
              onchange: state.updateStateWithInput,
              value: state.connectForm.dbEngine,
            },
            [
              h("option", { value: "sqlserver" }, text("SQL Server")),
              h("option", { value: "oracle" }, text("Oracle")),
            ]
          ),
        ]),
        h("div", { class: "form_control" }, [
          h("label", {}, text("Host Name")),
          h("input", {
            name: "hostName",
            oninput: state.updateStateWithInput,
            value: state.connectForm.hostName,
          }),
        ]),
        h("div", { class: "form_control" }, [
          h("label", {}, text("Port")),
          h("input", {
            name: "port",
            oninput: state.updateStateWithInput,
            value: state.connectForm.port,
          }),
        ]),
        h("div", { class: "form_control" }, [
          h("label", {}, text("User Name")),
          h("input", {
            name: "userName",
            oninput: state.updateStateWithInput,
            value: state.connectForm.userName,
          }),
        ]),
        h("div", { class: "form_control" }, [
          h("label", {}, text("Password")),
          h("input", {
            name: "password",
            oninput: state.updateStateWithInput,
            value: state.connectForm.password,
          }),
        ]),
        h("div", { class: "form_control" }, [
          h("label", {}, text("DataBase Name")),
          h("input", {
            name: "databaseName",
            oninput: state.updateStateWithInput,
            value: state.connectForm.databaseName,
          }),
        ]),
        h(
          "button",
          {
            class: "button_primary",
            type: "button",
            onclick: (_, e) => {
              e.preventDefault();
              return state.SubmitFrom;
            },
          },
          text("Connect")
        ),
      ]),
    ]),
  ]);
};

export default connectToDbForm;
