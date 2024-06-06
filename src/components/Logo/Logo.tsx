import { Component, ReactNode } from "react"

import LogoImg from './img/logo.png'

import styles from './Logo.module.scss'

class Logo extends Component {
  render(): ReactNode {
    return <img src={LogoImg} alt="logo" className={styles.Logo} />
  }
}

export default Logo