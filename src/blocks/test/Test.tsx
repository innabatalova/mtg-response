import { Component, ReactNode } from "react"

import styles from './Test.module.css'

class Test extends Component {
  render(): ReactNode {
    return <div className={styles.Test}>Hello App on classes</div>
  }
}

export default Test