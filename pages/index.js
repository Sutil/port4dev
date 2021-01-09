
import Container from '../components/Container';
import Counter from '../components/Counter'
import Header from '../components/Header/index';
import Repositories from '../components/Repositories/index';
const Home = () => {
  return <Container>
      <Header />
      <Counter/>
      <Repositories />
    </Container>
}

export default Home;