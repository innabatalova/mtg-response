import { Component, ReactNode, ChangeEvent } from "react"
import { connect } from "react-redux"

import { toogleRu, toogleEn } from "../../store/actions/language"

import styles from './Language.module.scss'

interface IProps {
  language: 'ru' | 'en',
  toogleRu: () => void,
  toogleEn: () => void
}

interface IToogleLanguage {
  type: "toogleRu" | "toogleEn",
  language: 'ru' | 'en'
}

interface IState {
  language: 'ru' | 'en'
}

class Language extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      language: 'ru'
    }
  }

  toogleLanguage = (e: ChangeEvent) => {
    this.props.language === 'ru' ? this.props.toogleEn() : this.props.toogleRu()
  }

  render(): ReactNode {
    return (
      <div className={styles.Language}>
        <span className={styles.Title}>Выбор языка</span>
        <select className={styles.Select} onChange={this.toogleLanguage} defaultValue={this.props.language}>
          <option>ru</option>
          <option>en</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state: IProps) => {
  return {
    language: state.language
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