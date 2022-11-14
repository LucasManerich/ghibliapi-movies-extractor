// conforme documentação: https://ghibliapi.herokuapp.com/#tag/Films

type GhibliListAllFilmsOutputDto = {
  id: string,
  title: string
  original_title: string
  original_title_romanised: string
  description: string
  director: string
  producer: string
  release_date: string
  running_time: string
  rt_score: string
}

export default GhibliListAllFilmsOutputDto
