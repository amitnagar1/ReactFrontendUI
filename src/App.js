import React, { Component } from "react";
import Posts from "./components/Posts";
import { Provider } from "react-redux";
import store from "./store";

import PostForm from "./components/PostForm";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1 className="mainheading">
            {" "}
            Tired of long URLs? Let's shorten them
          </h1>

          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
