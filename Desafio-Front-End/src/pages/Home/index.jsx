import {Container} from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { NoteFilm } from '../../components/NoteFilm';

export default function Home(){
  return (
    
    <Container>
      <Header/>
      <main>
        <h1>Meus Filmes</h1>
        <Button title="Adicionar Filme"></Button>
      </main>
      <NoteFilm title="Teste"></NoteFilm>
      <Tag title="React"></Tag>
    </Container>
    
  )
}