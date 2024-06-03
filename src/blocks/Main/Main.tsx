import { Component, ReactNode } from "react"

import ResponseItem from "../../components/ResponseItem/ResponseItem"

import styles from './Main.module.scss'

import DB from '../../db/data.json'

interface IProps {
}

interface IState {
  language: string
}


class Main extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      language: 'ru'
    }
  }


  render(): ReactNode {
    return (
      <div className={styles.Main}>
        {
          (this.state.language === 'ru' ? Object.entries(DB.ru) : Object.entries(DB.en)).map((item, index) =>
          (
            <ResponseItem key={index} name={item[1].name} review={item[1].review} date={item[1].date} />
          )
          )
        }
      </div>
    )
  }
}

export default Main