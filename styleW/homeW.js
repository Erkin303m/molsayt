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
        border-radius:10px;

     
        .absolut2{
            width:100%;
            height:100%;
            transition:0.3s;
            height: 200px;
            border-radius:10px;
            border: 1px solid #B0B0B0;
           box-shadow: 1px 1px 10px #B0B0B0;
           display: flex;
           justify-content: space-between;
           flex-direction:column;

        }

        &:hover{
           box-shadow: 2px 2px 20px #9A9A9A;
         
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
            /* padding:10px; */
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
            /* padding:10px; */
            border-radius:10px;
            margin: 20px 10px;
            box-shadow:1px 1px 15px black;
            transition: 0.3s;
            position: relative;
            overflow-y: hidden;

            &:hover{
                box-shadow:3px 3px 15px black;
                .absoluteP1{
                    transform: translateY(0);
                    transition: 0.4s;
                }
            }
            .absoluteP1{
                position: absolute;
                top: 0;
                left: 0;
                transform: translateY(100%);
                width: 100%;
                height: 100%;
                transition: 0.4s;
                display: flex;
                align-items: end;
                margin: 0;
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
        padding-top: 30px;
        .hamkorlogo{
            width: 100%;
            object-fit:cover;
            text-align: center;
        }
    }
    .doriRasm2{
        width: 500px;
        
    }

.doriCard2{
    padding:10px;
    border-radius:10px;
    margin: 20px 10px;
    box-shadow:1px 1px 15px #868686;
    transition: 0.3s;

    &:hover{
        box-shadow:3px 3px 15px #868686;
        .doriRasm{
        transform: scale(1);
        transition: 0.3s;

        }
    }
    .nomi{
        font-size: 30px;
        text-align: center;
        font-weight: bold;
        margin: 20px 0 30px 0;
    }
    .DoriBut{
        margin: 20px 0;
    }
    .hamkorlarr{
        a{
            text-decoration: none;
        }
    }
}
 .hamkorA{
    text-decoration: none;

 }   
.bizP{
    font-size:20px;
    color: #383838;
    margin: 10px 0;
}
.rasmSlider2{
    width: 100%;
    height: 300px;
    object-fit:cover;
}
.rasm11{
    width: 100px;
}
.rasm22{
    width: 100px;
}
.kkk{
    border-left: 1px solid gray;
}
.rasmbakteria{
    width: 70px !important;
    margin: 15px 0 0 0;
}
.rang{
    width: 100%;
    height: 20px;
    border-radius: 10px 10px 0 0;
}
.rang1{
    background:  #FF0000;
}
.rang2{
    background:  #0300FF;
}
.rang3{
    background:  #925712;
}
.rang4{
    background:  #12AE1A;
}
.rang5{
    background:  #8D1486;
}

.doriCard1{
    background: #ff000036;
}
.doriCard2{
    background: #0400ff34;
}
.doriCard3{
    background: #92561242;
}
.doriCard4{
    background: #12ae1a34;
}
.doriCard5{
    background: #8d14872a;
}
.DoriButp{
    width: 100%;
}
.soat{
    position: fixed;
    right: 100px;
    bottom: 50px;
    z-index: 50;
}



  
`;

export default HomeW