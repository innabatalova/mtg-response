export interface IProps {
  theme: {
    theme: 'light' | 'dark'
  },
  totalPages: number,
  itemPerPage: number,
  onChangePage: (page: number) => void,
  activeNumberPage: number
}