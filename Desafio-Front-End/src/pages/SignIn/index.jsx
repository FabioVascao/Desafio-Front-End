import {Container} from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

export default function SignIn(){
  return (
    <Container>
      <Header/>
      <h1>Hello World!</h1>
      <Button title="Entrar"></Button>
    </Container>
    
  )
}