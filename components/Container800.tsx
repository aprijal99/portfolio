import {Container} from '@nextui-org/react';
import {ReactNode} from 'react';

const Container800 = ({ children }: { children: ReactNode }) => {
  return (
    <Container
      fluid
      css={{
        mw: '800px',
      }}
    >
      {children}
    </Container>
  )
}

export default Container800;
