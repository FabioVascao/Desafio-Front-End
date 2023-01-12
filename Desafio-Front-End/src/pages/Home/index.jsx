import {Container} from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

export default function Home(){
  return (
    
    <Container>
      <Header/>
      <main>
        <h1>Meus Filmes</h1>
        <Button title="Adicionar Filme"></Button>
      </main>
    </Container>
    
  )
}