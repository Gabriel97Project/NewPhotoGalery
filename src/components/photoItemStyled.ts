import styled, { } from "styled-components"

/* type setSizeProps = {
    changePhotoSize?:boolean;
} */
export const PhotoStyled  = styled.div ` /* <setSizeProps> */
background-color:rgba(0, 0, 0, 0.59);
width:90%;
border-radius:10px;
padding:10px;
color: white;
    img{
    width:100%;
    height:150px;
    display:block;
    border-radius:10px;
    margin-bottom:10px;

    }


`

  /*  width:${//props => //props.changePhotoSize?"1000px":"100%"}; */