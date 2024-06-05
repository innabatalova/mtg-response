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
    
    const pages = []
    for (let i = 1; i <= Math.ceil(totalPages / itemPerPage); i++) {
      pages.push(i)
    }

    if (totalPages <= itemPerPage) { return (<></>) }

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
}

export default Pagination