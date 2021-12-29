import styled from 'styled-components'

const ComponentsW=styled.div`
.headersection{
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:100;
    background:green;
}
    .children{
        min-height:100vh;
        padding-top:100px;
    }
    .header1{
        display:flex;
        justify-content: space-between;
        
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
                }
            }
        }
    }
    .headerLogo{
        width:50px;
        height:50px;
        object-fit:cover;
    }
`;

export default ComponentsW