export interface IProps {
  language: {
    language: 'ru' | 'en'
  }
}

export interface IState {
  fisrtIndexPage: number,
  lastIndexPage: number,
  itemPerPage: number,
  activeNumberPage: number
}