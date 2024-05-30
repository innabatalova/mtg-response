import { Component, ReactNode } from "react"

import LogoImg from './img/logo.jpg'

import styles from './Logo.module.scss'

class Logo extends Component {
  render(): ReactNode {
    return <img src={LogoImg} alt="logo" className={styles.Logo}/>
  }
}

export default Logo