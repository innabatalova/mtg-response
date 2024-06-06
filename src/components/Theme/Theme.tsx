import { Component, ReactNode } from 'react'
import { connect } from "react-redux"

import { IProps, IToogleTheme } from "./interfaces"

import { themeLight, themeDark } from "../../store/actions/theme"

import styles from './Theme.module.scss'

class Theme extends Component<IProps> {
  toogleTheme = () => {
    this.props.theme === 'light' ? this.props.themeDark() : this.props.themeLight()
  }

  render(): ReactNode {
    return (
      <button className={styles.Theme} onClick={this.toogleTheme}>
        <svg className={styles.Img + ` ${this.props.theme}`} viewBox="0 0 24 24">
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

const mapStateToProps = (state: IProps) => {
  return {
    theme: state.theme
  }
}

const mapDispatchToProps = (dispatch: (action: IToogleTheme) => void) => {
  return {
    themeLight: () => {
      dispatch(themeLight)
    },
    themeDark: () => {
      dispatch(themeDark)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Theme)