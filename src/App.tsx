import { Component, ReactNode } from "react"

import Header from './blocks/Header/Header'
import Main from "./blocks/Main/Main"

import styles from './App.module.scss'

class App extends Component {
  render(): ReactNode {
    return (
      <div className={styles.App}>
        <Header />
        <Main />
      </div>
    )

  }
}

export default App