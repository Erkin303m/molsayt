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
                height: 200px;
                object-fit: cover;
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
        height: 600px;
        object-fit:cover;
        position: top center;
    }
    .section2{
        width: 100%;
    }
    a{
        color:black;
    }
    .sectionBiz{
        padding:100px 0 0 0;

    }
  
    .section5{
        padding:100px 0 50px 0;
        min-height:100vh;
       background-image: url("https://media.istockphoto.com/photos/abstract-blurred-blue-background-with-double-exposure-of-bokeh-circle-picture-id1153938533?b=1&k=20&m=1153938533&s=170667a&w=0&h=5Od9ufprW_r1VWfJRhFQhqX2xhpaCNUjK4xmmdZEo8w=");
        background-size: 300% 300%;
        animation: nimadr 15s infinite;
        input{
            margin-bottom:15px;
        }

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
    .section4{
        padding:100px 0 0 0;
        min-height:100vh;
       background-color: white;
        /* background-size: 300% 300%; */
        /* animation: nimadr 15s infinite; */

        /* @keyframes nimadr{
            0%{
                background-position:bottom left;
            }
            50%{
                background-position: top right;
            }
            100%{
                background-position: bottom left;
            }
        } */
        .doriRasm{
            width:100%;
            height:300px;
            object-fit:cover;
            border-radius:10px;
            text-align:center;
            transform: scale(0.9);
            transition: 0.3s;


        }
        .doriCard{
            padding:10px;
            border-radius:10px;
            margin: 20px 10px;
            background: #CAE2FF;
            box-shadow:1px 1px 15px black;
            transition: 0.3s;

            &:hover{
                box-shadow:3px 3px 15px black;
                .doriRasm{
                transform: scale(1);
                transition: 0.3s;

                }
            }
            .nomi{
                color:black;
                text-align:center;
                font-weight:bold;
                font-size: 20px;

            }
            .DoriBut{
                display: flex;
                justify-content:space-between;
                border-top: 1px solid #3E3E3E;
                padding: 5px;
                .narxi{
                    color:green;
                    font-weight:bold;   
                    margin:0;
                    padding:0;
                }
            }
           
        }
    }
    .rasmPage2{
        padding:10px;
    }

    .page2Rang{
        background: #CAE2FF;
        margin: 20px 0;
        padding: 30px;
        border-radius:10px;
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

    .bizCard{
        padding: 10px;
        img{
            width: 100%;
            height: 100%;
        }
    }
  
    .carouselRelative{
        position:relative;
        .carouselAbsolut{
            position: absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            background:rgba(58, 61, 63, 0);
            display:flex;
            align-items:center;
            /* justify-content:start; */
            color:white;
            .infoCard{
                display: flex;
                justify-content: center;
            }
        }
    }
    .hamkorlar{
        margin:10px;
        .hamkorlogo{
            width:200px;
            height:200px;
            object-fit:cover;
        }
    }

  
`;

export default HomeW