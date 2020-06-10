import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';


interface Props {
  children: any
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <NavMenu />
      <Container>
        {children}
      </Container>
    </div>
  );
}

export default Layout;