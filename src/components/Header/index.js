import React from 'react'
import Capa from './photos/capa-home.png'
import Star from './photos/Star-favorite.png'

import Box from './photos/Box.png'
import Fire from './photos/Fire.png'
import Lanc from './photos/lancamentos.png'
import Eye from './photos/eye.png'



import {Container, Text, Buttons, Tag, Section} from './style'
export default function Header(){
    
    return(
        <>
        <Container>
            <img src={Capa}/>
            <Text>
                <h1>Homem-Aranha - De volta ao lar</h1>
                <h6>2016</h6>
                <Tag>
                <span>1hr23 min</span>
                <span>|</span>
                <span className="theme"> Familia, Ficção</span>
                </Tag>
                <section className="likes">
                    <img src={Star}/>
                    <h4>6,7</h4>
                </section>
                    <span className="description">Em Homem-Aranha: De Volta ao Lar, depois de atuar ao lado dos Vingadores, chegou a hora de Peter Parker (Tom Holland) voltar para casa e para a sua vida, já não mais tão normal. Lutando diariamente contra pequenos crimes nas redondezas, ele pensa ter encontrado a missão de sua vida quando o terrível vilão Abutre (Michael Keaton) surge amedrontando a cidade. O problema é que a tarefa não será tão fácil como ele imaginava.</span>
                    <Buttons>
                        <button>Ver Trailer</button>
                        <button className="btn-default">Assistir Agora</button>
                    </Buttons>
            </Text>
        </Container>
        <Section>
            <section>
                <img src={Lanc}/>
                <span>Lançamentos</span>
            </section>

            <section>
                <img src={Box}/>
                <span>Novos Filmes</span>
            </section>

            <section>
                <img id="fire" src={Fire}/>
                <span>Populares</span>
            </section>

            <section>
                <img id="eye" src={Eye}/>
                <span>Mais Assistidos</span>
            </section>
        </Section>
</>
    )
}