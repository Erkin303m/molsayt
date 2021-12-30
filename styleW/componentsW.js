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
    }
    .header1{
        display:flex;
        justify-content: space-between;
        padding: 5px 5px;
        
        .headerOng{
            display: flex;
           
            .headerUl{
                display: flex;
                list-style-type:none;
                margin:0;
                padding:0;
                li{
                    margin: 0 10px;
                    padding: 5px 5px 0 5px;
                    color:white;
                    .headerMenu{
                        text-decoration: none;
                        color:white ;

                        
                    }
                }
            }
            
        }
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
    

    .headerLogo{
        width:100px;
        height:50px;
        object-fit:cover;
    }

    .footerSection{
        background: #285493;
        padding:10px 0;
        font-size:18px;
        color:white;
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
                color:white;
                background: #285493;
                border-radius:0 0 10px 10px;
                margin:0;
                padding:0 0 10px 0;
                li{
                    padding:5px;
                    border-bottom: 1px solid white;   
                }
            }
        }
    }

  
   
   
`;

export default ComponentsW