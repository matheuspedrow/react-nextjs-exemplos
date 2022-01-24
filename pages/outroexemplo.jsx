import Header from '../src/componentes/header/Header'
import Title from '../src/componentes/title/Title'
import Subtitle from '../src/componentes/subtitle/Subtitle'



function outroExemploPage () {
  return (
    <>
      <Header image={'https://sejadev-web-app-public-files.s3.amazonaws.com/courses/coffee2.jpg'}>
        <Title>Outro Café Dev</Title>
        <Subtitle text ="O OUTRO melhor café para você." />
      </Header>
    </>
  )
}

export default outroExemploPage