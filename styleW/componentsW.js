import styled from 'styled-components'

const ComponentsW=styled.div`
   
    .headersection{
        position:fixed;
        top:0;
        left:0;
        right:0;
        z-index:100;
        background: #285493;
    }
    .children{
        min-height:100vh;
        padding-top:30px;
        width: 100%;
    }
    .header1{
        display:flex;
        justify-content: space-between;
        padding: 5px 5px;
        
        .headerOng{
            display: flex;
            align-items:center;
           
            .headerUl{
                display: flex;
                list-style-type:none;
                margin:0;
                padding:0;
                li{
                    margin: 0 10px;
                    padding: 0 5px;
                    display: flex;
                    align-items:center;
                    color:white;
                    .headerMenu{
                        text-decoration: none;
                        color:white ;

                        
                    }
                }
            }
            
        }
    }
    .tugma{
        background: white;
        padding: 10px;
        font-size: 10px;
    }
   
    .navbar{
        display: none;
    }

    @media only screen and (max-width: 700px) {
        .headerUl {
            display:none !important;
        }
        .navbar{
            display: flex;
        }

    }
    .logoMobile{
        margin:0 0 10px 0;
    }
    

    .headerLogo{
        width:150px;
        /* height:100px; */
        object-fit:cover;
    }
    .buyTugma{
    background: white;
    color: #285493;
    font-weight: bold;
    }

    .footerSection{
        background: #285493;
        padding:10px 0;
        font-size:18px;
        color:white;
        width: 100%;
        p{
            text-align:center;
        }
        a{
            color:white ;
            text-decoration: none;
            font-size:18px;
        }
        .logoFooter{
            width: 200px;
        }
        .logoFooterCard{
            display:flex ;
            justify-content:center;
        }
    }
    .section3{
        padding:50px;
    }
    .catalogLi{
        &:hover{
            .catalogCard{
            display:flex;   

            }
        }
        .catalogCard{ 
            position:absolute;
            top:100%;  
            display:none;   
            ul{
                list-style-type: none !important;
                background: white;
                border-radius: 10px;
                margin:0;
                padding:0 0 10px 0;
                li{
                    padding:5px;
                    border-bottom: 1px solid white;   
                     .katalogH{
                        background: #E8E8E8;
                        padding: 5px;
                        margin: 1px;
                        color: #285493;
                        border-radius: 10px;
                         cursor:alias;
                        
                        &:hover{
                            background: #285493;
                            color: white;

                        }
                    }
                }
            }
        }
    }
    .forTable{
        padding:10px;
        margin:10px;
        overflow-x: auto;
    }
   .footerIco{
       font-size: 25px;
       margin-right: 10px;
   }


  
   
   
`;

export default ComponentsW