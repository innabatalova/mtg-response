import { Component, ReactNode } from "react"

import Logo from "../../components/Logo/Logo"
import Language from "../../components/Language/Language"

import styles from './Header.module.scss'

class Header extends Component {
  render(): ReactNode {
    return <div className={styles.Header}>
      <Logo />
      <div className={styles.Wrapper}>
        <Language />
      </div>
    </div>
  }
}

export default Header