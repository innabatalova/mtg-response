import { Component, ReactNode } from "react"

import styles from './ResponseItem.module.scss'

interface IProps {
  name: string,
  review: string,
  date: string
}

class ResponseItem extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  render(): ReactNode {
    const nameStrArr = this.props.name.split(' ')
    const newStr = nameStrArr[0] + ' ' + (nameStrArr[1] != undefined ? nameStrArr[1][0] + '.' : '') 

    return (
      <>
        <div className={styles.ResponseItem}>
          <div className={styles.Wrapper}>
            <span className={styles.Title}>{newStr}</span>
            <span className={styles.Title}>{this.props.date}</span>
          </div>
          <span>"{this.props.review}"</span>
        </div>
      </>
    )
  }
}

export default ResponseItem