import Title from '../src/componentes/title/Title'
import Subtitle from '../src/componentes/subtitle/Subtitle'

function HomePage () {
  return (
    <div>
      <Title>Um Titulo</Title>
      <Subtitle text = "Um Subtitulo" />
      <Title>Outro Titulo</Title>
      <Subtitle text = "Outro Subtitulo" />
    </div>
  )
}

export default HomePage