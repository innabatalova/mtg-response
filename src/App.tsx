import { Component, ReactNode } from "react"
import { connect } from "react-redux"

import { IProps } from "./interfaces"

import Header from './blocks/Header/Header'
import Main from "./blocks/Main/Main"

import styles from './App.module.scss'

class App extends Component<IProps> {
  render(): ReactNode {
    return (
      <div className={this.props.theme}>
        <div className={styles.Wrapper}>
          <Header />
          <Main />
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state: IProps) => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps)(App)