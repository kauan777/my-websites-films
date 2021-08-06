import styled from 'styled-components'


export const Container = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
padding-left: 4.5rem;
padding-right: 4.5rem;
padding-top: 1.875rem;


img{
    width: 126px;
    height:32px;
}

`
export const Links = styled.div`

ul{
    list-style: none;
    display: flex;
}

li{
    display: flex;
    align-items: center;
    margin-right: 42px;
    border-bottom: 2px solid transparent;
    font-weight: bold;
    cursor: pointer;
    padding-top: 1.475rem;
    padding-bottom: 1.475rem;
    transition: 0.3s ease-in;
}

li:hover{
    border-bottom: 2px solid red;
}

`
export const Section = styled.div`

    display: flex;
    align-items: center;


img:first-child{
    margin-right: 1.3125rem;

}

img{
    width: 24px;
    height: 24px;
    cursor: pointer;
}

img.login{
    width: 16px;
    height: 16px;
    margin-right: 9px;
}

span{
    font-size: 10px;
    font-weight: bold;
}

`