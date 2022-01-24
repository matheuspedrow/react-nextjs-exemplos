import { useState } from 'react'
import Head from 'next/head'
import Title from '../src/componentes/title/Title'
import Subtitle from '../src/componentes/subtitle/Subtitle'
import Button from '../src/componentes/button/Button'


function HomePage () {
  const [click, setClick] = useState(0)

  const handleClick = () => {
    console.log ("HANDLE CLICK")
    setClick (click +1)
  }

  return (
    <>
    <Head>
      <title>Titulo Diferente da HomePage</title>

    </Head>
    
    <div>
      <Title>Um Titulo</Title>
      <Subtitle text = "Um Subtitulo" />
      <Title>Outro Titulo</Title>
      <Subtitle text = "Outro Subtitulo" />
      <Button onClick={handleClick}
      >
        Botão Teste
      </Button>
      <p>Cliques: {click}</p>
    </div>
    </>
  )
}

export default HomePage