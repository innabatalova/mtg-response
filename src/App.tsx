import { Component, ReactNode } from "react"

import Header from './blocks/Header/Header'

import styles from './App.module.scss'

class App extends Component {
  render(): ReactNode {
    return (
      <div className={styles.App}>
        <Header />
      </div>
    )

  }
}

export default App