import { Image } from "react-bootstrap";
import styled from "styled-components"


// NAVBAR STYLING
export const LogoNavImage = styled(Image) `
    width: 50px;
    height: 50px;
    padding: 0%;
    margin: auto;
    display: flex;
    align-items: left;
`
export const NavbarContainer = styled.div `
    box-shadow: 0px 6px 5px #7c6c04;
    position: sticky;
    top: 0px;
`

//HOMEPAGE

//HOMEPAGE HEADER
export const headerContainer = styled.div `
    background-image: url("https://res.cloudinary.com/dotykc1ws/image/upload/v1667086290/Personal%20Site/Jordan_Holm-light_mdhmhk.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    margin: 5vw;
    width: auto;
    padding: 15vw;
    border-radius: 10px;
    text-align: center;
`
// HOMEPAGE ABOUT
export const cardContainer = styled.div `
    background-color: white;
    width: auto;
    height: auto;
    margin: 5vh;
    margin-inline: 5vw;
    border-radius: 10px;
    box-shadow: 6px 6px 5px #7c6c04;
`
export const cardImageContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const CardImage = styled(Image)`
    width: 40vw;
    height: auto;
    margin: 10%;
    border-radius: 5px;
    box-shadow: 6px 6px 5px lightgrey;
`
export const cardText = styled.div`
    text-align: center;
    margin: auto;
    border-left: 2px solid lightgrey;
    font-size: 120%;
    h3 {
        text-decoration: underline #f3d304 3px;
    }
`
