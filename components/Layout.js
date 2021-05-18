import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  min-height: 70vh;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
