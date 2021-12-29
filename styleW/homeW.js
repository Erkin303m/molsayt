import styled from 'styled-components'

const HomeW = styled.div`
.section1{
    min-height:100vh;
}
    .asosiy{
        position:relative;
        margin:10px;
        .oddiy{
            width: 100%;
            .molAbsolut{
                width:100%;
                height:100%;
                border-radius:10px;  
            }
        }
        .absolut{
            position:absolute;
            width:100%;
            height:100%;
            transition:1s;
            top:0;
            left:0;
            display:flex;
            justify-content:center;
            align-items:center;
            z-index:-1;
            border-radius:10px;
        }
        &:hover{
            .absolut{
                z-index:2;
                box-shadow:2px 2px 10px black;
                background-color:red;
            }
        }
    }
    .rasmSlider{
        width: 100%;
        height: 600px;
        object-fit:cover;
    }
`;

export default HomeW