import { Component } from 'react'
import { connect } from "react-redux"

import { IProps, IState } from './interfaces'

import styles from './Watch.module.scss'

class Watch extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      time: new Date()
    }
  }

  private interval!: ReturnType<typeof setInterval>

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: new Date() })
    }, 0)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const hours = this.state.time.getHours()
    const minutes = this.state.time.getMinutes()
    const seconds = this.state.time.getSeconds()

    const timeString: string = ('0' + hours).slice(-2) + ':'
      + ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2)

    return (
      <div className={styles.Watch + ` ${this.props.theme.theme}`}>{timeString}</div>
    )
  }
}

const mapStateToProps = (state: IProps) => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps)(Watch)