import styled from 'styled-components'
import Background from './background.png'

export const Div = styled.div`
    background-image: url(${Background});
    position: relative;
    height: 100vh;
    width: auto;
    /* adicionando imagem de fundo */
    background-size: cover;
`