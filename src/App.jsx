// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar/Sidebar';
import CafeList from './components/CafeList/CafeList';
import "./App.css";
import React from "react";

function App() {
  //React hooks for states
  const [cafes, setCafes] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");

  //React hooks Effect
  React.useEffect(() => {
    //cafes which is the state
    //setCafes is function that changes the state

    //need to launch the api through "rails s" in the "creating_caffe_api" project.
    const url = "http://127.0.0.1:3000/api/v1/cafes";
    const params = (keyword !== "") ? `?title=${keyword}` : "";
    fetch(url + params)
      .then(response => response.json())
      .then(data => {
        setCafes(data);
    });

    }, [keyword]);

    return(
      <div className="app-frame">
        <Navbar setKeyword={setKeyword} />
        <div className="app-body">
          <Sidebar />
          <CafeList cafes={cafes} />
        </div>
      </div>
    );
}

export default App;
