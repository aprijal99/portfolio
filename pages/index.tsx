import {Container} from '@nextui-org/react';
import Banner from '../components/home/Banner';
import Contact from '../components/home/Contact';
import Project from '../components/home/Project';

const Home = () => {
  return (
    <Container
      fluid
      css={{
        mw: '800px',
      }}
    >
      <Banner />
      <Project />
      <Contact />
    </Container>
  )
}

export default Home;
