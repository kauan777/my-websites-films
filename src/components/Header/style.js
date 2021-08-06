import styled from 'styled-components'


export const Container = styled.div`

display: flex;
margin-top: 5rem;
margin-left: 14.875rem;
height: 300px;

`
export const Text = styled.div`
display: flex;
flex-direction: column;
margin-left: 38px;
h1{
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 10px;
}

h6{
    font-size: 18px;
    margin-bottom: 10px;
}

section.likes{
    display: flex;
    margin-bottom: 10px;
    img{
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    h4{
        font-weight: 500;
    }
}

span.description{
    width: 507px;
    font-size: 14px;
    color: #CCCCCC;
    margin-bottom: 10px;

}


`



export const Tag = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
width: 200px;
margin-bottom: 10px;

span.theme{
    font-weight: bold;
}
`

export const Buttons = styled.div`

button{
    border-radius: 22px;
    background-color: #000;
    width: 204px;
    font-family: 'Roboto', sans-serif;
    padding: 13px;
    outline: none;
    letter-spacing: 0.4px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    margin-right: 22px;
}

button.btn-default{
    background: #B71E1E;
    transition: 0.2s ease-in;
}

button.btn-default:hover{
    box-shadow: 0px 2px 40px rgba(241, 11, 11, 0.301);;
}
`

export const Section = styled.div`
display: grid;
width: 100%;
grid-template-columns: 1fr 1fr 1fr 1fr;
margin-top: 74px;
border-top: 1px solid #A8A8A8;

section{
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 27px;
    margin-right: 1px;

    img{
        margin: 0 auto;
        width: 20px;
        height: 20px;
    }

    img#fire{
        height: 24px;
    }

    span{
        font-weight: bold;
        margin-top: 11px;

    }
}


`

