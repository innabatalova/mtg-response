import { Component, ReactNode } from 'react'

import styles from './Theme.module.scss'

interface IProps {
}

interface IState {
  theme: 'light' | 'dark'
}

class Theme extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      theme: 'light'
    }
  }

  toogleTheme = () => {
    this.state.theme === 'light' ? this.setState(() => { return { theme: 'dark' } }) : this.setState(() => { return { theme: 'light' } })
  }

  render(): ReactNode {
    return (
      <button className={styles.Theme} onClick={this.toogleTheme}>
        <svg className={styles.Img} viewBox="0 0 24 24">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g fill="#212121" fillRule="nonzero">
              <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z">
              </path>
            </g>
          </g>
        </svg>
      </button>
    )
  }
}

export default Theme