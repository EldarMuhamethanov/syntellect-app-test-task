import React from "react";
import "./App.module.css";
import {HelloWorldTextField} from "./HelloWorldTextField";
import {TextFieldWithAlert} from "./TextFieldWithAlert";
import styles from './App.module.css'
import {CountryAutoComplete} from "./CountryAutoComplete";

function App() {
  return (
      <div className={styles.app}>
        <HelloWorldTextField />
        <TextFieldWithAlert />
        <CountryAutoComplete maxHintsCount={3}/>
        <CountryAutoComplete maxHintsCount={10}/>
      </div>
  )
}

export default App;
