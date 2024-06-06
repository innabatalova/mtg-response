import { Component, ReactNode, ChangeEvent } from "react"
import { connect } from "react-redux"

import { IProps, IToogleLanguage } from "./interfaces"

import { toogleRu, toogleEn } from "../../store/actions/language"

import styles from './Language.module.scss'

class Language extends Component<IProps> {
  toogleLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    this.props.language === 'ru' ? this.props.toogleEn() : this.props.toogleRu()
  }

  render(): ReactNode {
    return (
      <div className={styles.Language}>
        <span className={styles.Title + ` ${this.props.theme}`}>{this.props.language === 'ru' ? 'Язык' : 'Language'}</span>
        <select className={styles.Select + ` ${this.props.theme}`} onChange={this.toogleLanguage} defaultValue={this.props.language}>
          <option>ru</option>
          <option>en</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state: IProps) => {
  return {
    language: state.language,
    theme: state.theme
  }
}

const mapDispatchToProps = (dispatch: (action: IToogleLanguage) => void) => {
  return {
    toogleRu: () => {
      dispatch(toogleRu)
    },
    toogleEn: () => {
      dispatch(toogleEn)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Language)