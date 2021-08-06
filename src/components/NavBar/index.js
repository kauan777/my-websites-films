import React from 'react'
import {Container, Links, Section} from './style'
import Logo from './photos/logo.png'
import Search from './photos/Search.png'
import Login from './photos/Login.png'
export default function NavBar(){

    
    return(
        <Container>
            <img src={Logo}/>
            <Links>
                <ul>
                    <li>Home</li>
                    <li>Series</li>
                    <li>Filmes</li>
                    <li>Novidades</li>
                </ul>
            </Links>
            <Section>
                <img src={Search}/>
                <img className="login" src={Login}/>
                <span>MINHA CONTA</span>
            </Section>


        </Container>
    )
}