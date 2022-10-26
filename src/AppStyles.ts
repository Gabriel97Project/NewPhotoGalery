import styled from "styled-components"
import imageBackground from "./components/backgroundImage/imageCameraTwo.webp"




export const AppStyled = styled.div`

    background-color:#FFF;
    background-image:url(${imageBackground});
    color:blue;
    width:100vw;
    height:100vh;
    background-repeat:no-repeat;
    overflow-x:hidden;

`;


export const AppStyledSon = styled.div`
    //background-color:green;
    margin:auto;
    max-width:980px;
    padding:30px;
`;

export const HeaderStyle = styled.div`
    //background-color:yellow;
    margin:0;
    padding:0;
    text-align:center;
    color:rgba(0, 0, 0, 0.59);
`;

export const LoadingScreenStyle = styled.div`

    text-align:center;
        .emoji{
            font-size:50px;
            margin-bottom:10px;
        }
`

export const LoadedScreenStyle = styled.div`


    display:grid;
    grid-template-columns: repeat(4, 1fr);
    /* acima temos quntidade de fotos em cada coluna */
    gap: 20px;
    
    /* gap é a distancia de cada imagem nas colunas */
    @media (max-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
       
    }
    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
       
    }
    div{
        display:flex;
        flex-direction:column;
        align-items:center;
         button{
            width:100%;
            height:30px;
            color:white;
            border:none;
            font-size:15px;
            background-color:rgba(0, 0, 0, 1);
            cursor:pointer;
            background-color:black;
            margin-top:5px;
            width:80%;
            border-radius:10px;
            color:white;
                @media (max-width: 500px) {
                    width:30%;
                
                }
    
         }
    
    }
   
`

export const UploadFormStyle = styled.form`

    border-radius:10px;
    margin-bottom:30px;
    padding:15px;
    display:flex;
    justify-content:space-between;



input{
    background-color:rgba(0, 0, 0, 0.59);
    color:white;
    padding: 8px 16px;
    font-size:15px;
    border-radius:10px;
    border-radius:10px;
    cursor:pointer;
    
    &:hover{
        opacity: .9;
    }
}
.inputTextClass{
    color:white;
    background-color:green;
    opacity:0.9;
}
`

