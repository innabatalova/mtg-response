import { Component, ReactNode, ChangeEvent } from "react"

import styles from './Language.module.scss'

interface IProps {
}

interface IState {
  language: string
}

class Language extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      language: 'ru'
    }
  }

  toogleLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState(() => {
      return { language: event.target.value as string}
    })
  }

  render(): ReactNode {
    return (
      <div className={styles.Language}>
        <span className={styles.Title}>Выбор языка</span>
        <select className={styles.Select} onChange={this.toogleLanguage}>
          <option>ru</option>
          <option>en</option>
        </select>
      </div>
    )
  }
}

export default Language