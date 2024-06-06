import { Component, ReactNode } from "react"
import { connect } from "react-redux"

import { IProps } from "./interfaces"

import styles from './ResponseItem.module.scss'

class ResponseItem extends Component<IProps> {
  render(): ReactNode {
    const { name, review, date } = this.props
    const nameStrArr = name.split(' ')
    const newStr = nameStrArr[0] + ' ' + (nameStrArr[1] !== undefined ? nameStrArr[1][0] + '.' : '')

    return (
      <>
        <div className={styles.ResponseItem + ` ${this.props.theme}`}>
          <div className={styles.Wrapper}>
            <span className={styles.Title}>{newStr}</span>
            <span className={styles.Title}>{date}</span>
          </div>
          <span>"{review}"</span>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state: IProps) => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps)(ResponseItem)