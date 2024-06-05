import { Component, ReactNode } from "react"

import styles from './Pagination.module.scss'

interface IProps {
  totalPages: number,
  itemPerPage: number,
  onChangePage: (page: number) => void,
  activeNumberPage: number
}


class Pagination extends Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  render(): ReactNode {
    const { totalPages, itemPerPage, activeNumberPage } = this.props

    const pages: number[] = []
    for (let i = 1; i <= Math.ceil(totalPages / itemPerPage); i++) {
      pages.push(i)
    }

    if (totalPages <= itemPerPage) { return (<></>) }

    if (pages.length <= 3) {
      return (
        <div className={styles.Pagination}>
          <ul className={styles.List}>
            {pages.map(page => (
              <li className={styles.Item + ' ' + (page === activeNumberPage ? styles.Item_active : '')} key={page} onClick={() => this.props.onChangePage(page)}>{page}</li>
            ))}
          </ul>
        </div >
      )
    }

    let min = pages[0]
    let mid = Math.ceil(pages.length / 2)
    let max = pages[pages.length - 1]

    return (
      <div className={styles.Pagination}>
        <ul className={styles.List}>
          <li className={styles.Item + ' ' + (min === activeNumberPage ? styles.Item_active : '')} onClick={() => this.props.onChangePage(min)}>{min}</li>
          <li className={styles.Item} onClick={() => this.props.onChangePage(activeNumberPage < 2 ? activeNumberPage : activeNumberPage - 1)}>{'<'}</li>
          <li className={styles.Item + ' ' + (mid === activeNumberPage ? styles.Item_active : '')} onClick={() => this.props.onChangePage(mid)}>{mid}</li>
          <li className={styles.Item} onClick={() => this.props.onChangePage(activeNumberPage > (pages.length - 1) ? activeNumberPage : activeNumberPage + 1)}>{'>'}</li>
          <li className={styles.Item + ' ' + (max === activeNumberPage ? styles.Item_active : '')} onClick={() => this.props.onChangePage(max)}>{max}</li>
        </ul>
      </div >
    )
  }
}

export default Pagination