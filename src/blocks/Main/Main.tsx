import { Component, ReactNode } from "react"

import ResponseItem from "../../components/ResponseItem/ResponseItem"
import Pagination from "../../components/Pagination/Pagination"

import styles from './Main.module.scss'

import DB from '../../db/data.json'

interface IProps {
}

interface IState {
  language: 'ru' | 'en',
  fisrtIndexPage: number,
  lastIndexPage: number,
  itemPerPage: number,
  activeNumberPage: number
}


class Main extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      language: 'ru',
      lastIndexPage: 10,
      fisrtIndexPage: 0,
      itemPerPage: 10,
      activeNumberPage: 1
    }
  }

  getPageNumber = (page: number): void => {
    const { itemPerPage } = this.state
    this.setState(() => {
      return {
        lastIndexPage: page * itemPerPage,
        fisrtIndexPage: page * itemPerPage - itemPerPage,
        activeNumberPage: page
      }
    })
  }


  render(): ReactNode {
    const totalPages = this.state.language === 'ru' ? Object.entries(DB.ru) : Object.entries(DB.en)
    const { fisrtIndexPage, lastIndexPage, itemPerPage, activeNumberPage } = this.state
    const currentItems = totalPages.slice(fisrtIndexPage, lastIndexPage)

    return (
      <div className={styles.Main}>
        {
          currentItems.map((item, index) =>
          (
            <ResponseItem key={index} name={item[1].name} review={item[1].review} date={item[1].date} />
          )
          )
        }
        <Pagination totalPages={totalPages.length} itemPerPage={itemPerPage} onChangePage={this.getPageNumber} activeNumberPage={activeNumberPage} />
      </div>
    )
  }
}

export default Main