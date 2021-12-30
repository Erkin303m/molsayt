import styled from 'styled-components'

const HomeW = styled.div`
.section1{
    padding:100px 0;
    .doriCatalog{
        font-size:20px;
        font-weight:bold;
        color:black;
        text-align:center;
    }
}
    .asosiy{
        position:relative;
        margin:10px;
        transition: 0.3s;
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
            transition:0.3s;
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
        height: 800px;
        object-fit:cover;
    }
    .section2{
        width: 100%;
    }
    a{
        color:black;
    }
    .section4{
        padding:100px 0 0 0;
        min-height:100vh;
        background-image: linear-gradient(to right top, #c67da6, #c48bbb, #bf99cd, #baa8dc, #b5b6e8, #afb7ea, #a8b9ec, #a1baee, #95afe9, #8aa5e4, #7f9adf, #758fda);
        background-size: 300% 300%;
        animation: nimadr 15s infinite;

        @keyframes nimadr{
            0%{
                background-position:bottom left;
            }
            50%{
                background-position: top right;
            }
            100%{
                background-position: bottom left;
            }
        }
        .doriRasm{
            width:100%;
            height:300px;
            object-fit:cover;
            border-radius:10px;
            text-align:center;
        }
        .doriCard{
            padding:10px;
            border-radius:10px;
            border:1px solid black;
            margin: 20px 10px;
            background: white;
            .nomi{
                color:black;
                text-align:center;
                font-weight:bold;

            }
            .DoriBut{
                display: flex;
                justify-content:space-between;
                .narxi{
                    color:green;
                    font-weight:bold;   
                    margin:0;
                    padding:0;
                }
            }
           
        }
    }

    /* error section */

    .errorSection{
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:100vh;
        .errorImg{
            width:100%;
        }
    }
  

  
`;

export default HomeW