import styled from 'styled-components'

const HomeW = styled.div`
.section1{
    padding:100px 0;
}
    .asosiy{
        position:relative;
        margin:10px;
        transition: 0.5s;
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
            transition:0.5s;
            top:0;
            left:0;
            display:flex;
            justify-content:center;
            align-items:center;
            z-index:-1;
            border-radius:10px;
        }
        &:hover{
                transform: scale(1.05);
            .absolut{
                z-index:2;
                box-shadow:5px 5px 15px black;
                background: rgba(154, 174, 190, 0.445);
              

                
            }
        }
    }
    .rasmSlider{
        width: 100%;
        height: 600px;
        object-fit:cover;
    }
    .section2{
        width: 100%;
    }
      a{
                    color:black;
                }
`;

export default HomeW