import styled from "styled-components";

export const NavStyle=styled.header`

.header{
    grid-area:border;
    background: #00ffff;
}
.header .container{
    display:flex;
    padding: 30px 40px;
    justify-content:space-between;
    align-items:center;
}
.header .logo{
    font-size:2rem;
    font-weight:700;
    color:blue;
}
.header ul navLink{
    font-size:1irem;
    text-transform:uppercase;
    padding:10px 20px;
}
.header ul .navLink:hover{
    text-decoration:underline;
    color: red;
    font-weght: 800;
    cursor:pointer;
}

`