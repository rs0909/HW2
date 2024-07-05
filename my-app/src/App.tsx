import type {Component} from "solid-js";

import {styled} from "@macaron-css/solid";

import SectionList from "./components/SectionList";
import styles from "./App.module.css";
import SidePanel from "./components/SidePanel";
import {sizeStyles} from "./components/Size";

const Header = styled("header", {
  base: sizeStyles.header,
});

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header> Rim Soo's To-do List</Header>
      <div class="container">
        <SidePanel />
        <SectionList />
      </div>
    </div>
  );
};

export default App;
