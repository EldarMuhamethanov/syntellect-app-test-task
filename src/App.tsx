import React from "react";
import "./App.module.css";
import {HelloWorldTextField} from "./HelloWorldTextField";
import {TextFieldWithAlert} from "./TextFieldWithAlert";
import styles from './App.module.css'
import {CountriesInput} from "./CountriesInput";

function App() {
  return (
      <div className={styles.app}>
        <HelloWorldTextField />
        <TextFieldWithAlert />
        <CountriesInput maxHintsCount={3}/>
        <CountriesInput maxHintsCount={10}/>
      </div>
  )
}

export default App;
