import React from "react";
import styled from "styled-components"
const Wrapper=styled.div`
.footer{
    background-color: #07182d;
}
`;

const Footer = () => (
<Wrapper> 
<footer className="footer">
  <div className="content has-text-centered">
    <p>
      <strong>Bulma</strong> by <a href="#">dharmveer Bangar</a>. The source code is licensed
      <a href="#">MIT</a>. The website content
      is licensed <a href="#">CC BY NC SA 4.0</a>.
    </p>
  </div>
</footer>
</Wrapper>
    );
export default Footer;