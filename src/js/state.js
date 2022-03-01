let initialState = {
  connectForm: {
    dbEngine: "sqlserver",
    hostName: "104.198.154.85",
    port: "1433",
    userName: "sa",
    password: "P@ssw0rd.1",
    databaseName: "BikeStores",
  },
  count: 0,
  addOne: (state) => {
    return { ...state, count: state.count + 1 };
  },
  updateStateWithInput: (state, e) => {
    return {
      ...state,
      connectForm: { ...state.connectForm, [e.target.name]: e.target.value },
    };
  },

  SubmitFrom: (state) => {
    console.log(state);
    return state;
  },
};

export default initialState;
