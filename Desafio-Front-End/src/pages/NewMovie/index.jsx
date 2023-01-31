import { FiArrowLeft } from 'react-icons/fi';
import {Container, Content, New} from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { NoteFilm } from '../../components/NoteFilm';

export function NewMovie(){
  return (
    
    <Container>
      <Header/>
      <main>
        <Content>
           <a href='/'>
             <FiArrowLeft/>Voltar
           </a>

           <h1>Novo Filme</h1>

           <New>
              <Input type="text" placeholder="Título"/>
              <Input type="text" placeholder="Sua nota de 0 a 5"/>
           </New>
           <textarea name="story" placeholder="Observações"/>
    
        </Content>
      </main>
      
      
    </Container>
    
  )
}