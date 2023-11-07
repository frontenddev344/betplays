import styled from "@emotion/styled";

export const HeaderStyle = styled.header`



.headerBar {
  background: #ffffff;
  padding: 10px 0;
  position: fixed;
  top: 0;
  z-index: 99;
  left: 0;
  right: 0;
  box-shadow: 0px 1px 5px #efefef;

    .headerWrapper {
        display: grid;
         grid-template-columns: 1fr 2fr;
         align-items: center; 

          .logo {
            grid-colums: 1/2;
               img {
                width: 100%;
                max-width: 150px;
             }
          }
          ul.headerNav {
            grid-column: 2/3;
            justify-content: space-between;
            display: flex;
            li {
                margin: 0 20px;
                font-size: 22px;
                font-family: 'Cinzel', serif;
                a {
                  color: #28ebbc;
                  transition: .3s;
                  &:hover{
                    color: #0E0E0E;
                  }
              }
        }
    }
    .hamburger-Icon svg {
      color: #28ebbc !important;
      cursor: pointer;
      margin-top: 6px;
  }
}
ul.headerNav::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

ul.headerNav::-webkit-scrollbar
{
	width: 0px;
	background-color: #F5F5F5;
}


}




${'' /* @media screen and (min-width: 991px){
  .hamburger-Icon {
    display: none;
  }
} */}


ul.headerNav {
    display: none !important;
}
.hamburger-Icon {
  text-align: right;

      svg{
        color: #fff;
    }
}
.headerNav.mobile-menu-link ul.headerNav {
    display: block !important;
    position: fixed;
    right: 0;
    background: #ffffff;
    top: 88px;
    bottom: 0;
    width: 50%;
    overflow: auto;
    padding-bottom: 400px;

  li {
    margin: 40px 20px;
}
}

.headerBar .headerWrapper ul.headerNav li a.active {
    color: #000;
}

 @media screen and (max-width: 991px){

.headerBar .headerWrapper ul.headerNav li {
  margin: 20px 20px;
  font-size: 18px;
}
 }



`