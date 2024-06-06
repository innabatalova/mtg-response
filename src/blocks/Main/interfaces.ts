export interface IProps {
  language: 'ru' | 'en'
}

export interface IState {
  fisrtIndexPage: number,
  lastIndexPage: number,
  itemPerPage: number,
  activeNumberPage: number
}