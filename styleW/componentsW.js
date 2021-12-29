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
            ul{
                display: flex;
                list-style-type:none;
                margin:0;
                padding:0;
                li{
                    margin:5px;
                    padding: 5px;
                    .headerMenu{
                        text-decoration: none;
                        color:white ;

                        
                    }
                }
            }
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

        a{
            color:white ;
            text-decoration: none;
            font-size:18px;
        }
        .logoFooter{
            width: 150px;
        }
    }
    .section3{
        padding:50px;
    }
`;

export default ComponentsW