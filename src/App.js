import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import AddBtn from "./components/layout/AddBtn";
import Logs from "./components/logs/Logs";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <SearchBar></SearchBar>
        <div className="container">
          <Logs></Logs>
          <AddLogModal></AddLogModal>
          <EditLogModal></EditLogModal>
          <AddTechModal></AddTechModal>
          <TechListModal></TechListModal>
          <AddBtn></AddBtn>
        </div>
      </div>
    </Provider>
  );
};

export default App;
