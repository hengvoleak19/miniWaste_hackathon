import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
   --background: #ffffff;
   --black:#0a0b10;
   --purple:#803bec;
   --pink:#e5a1f8;
   --white:#fff;
   --black: #000;
   --nav:#35353f;
   --nav2:#3f3d56;
   --primarycolor: #0CDD3A;
   --secondarycolor: #12232E;
   --navcolor: #ffffff;
}


*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
}
html{
    ${"" /* overflow-y: scroll; */}
    scroll-behavior:smooth;
    
  }
      body,
      html,
      a {
          font-family: 'Poppins', sans-serif;
              }
      body {
  
          margin:0;
          padding:0;
          border: 0;
          outline: 0;
          background: var(--background);
  
          overflow-x: hidden;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
          margin:0;
          padding:0;
      }
      a {
  
          text-decoration: none;
          outline: none;
      }
      button{
        border:none;
        outline:none;
        &:focus{
            outline:none;
        }
    }

    *:focus {
        outline: none;
    }

    img,svg{
        width:100%;
        height:auto;
    }


`;
export default GlobalStyle