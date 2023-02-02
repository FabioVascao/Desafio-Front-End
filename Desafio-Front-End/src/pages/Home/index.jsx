import { FiPlus } from 'react-icons/fi';
import {Container, Content} from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { NoteFilm } from '../../components/NoteFilm';
import { Link } from 'react-router-dom';

export function Home(){
  return (
    
    <Container>
      <Header/>
      <main>
        <h1>Meus Filmes</h1>
        <Link to="/new">
           <Button title="Adicionar Filme" icon={FiPlus}/>
        </Link>
      </main>
      <Content>
        <NoteFilm data={{
          title: 'Interstellar',
          content: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua familia. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
          tags: [
            {id: '1', name: 'React'},
            {id: '2', name: 'Node'},
            {id: '3', name: 'Vite'}
          ]
        }}
        
        />
        <NoteFilm data={{
          title: 'Interstellar',
          content: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua familia. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
          tags: [
            {id: '1', name: 'React'},
            {id: '2', name: 'Node'}
          ]
        }}
        />
        <NoteFilm data={{
          title: 'Interstellar',
          content: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua familia. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
          tags: [
            {id: '1', name: 'React'},
            {id: '2', name: 'Node'}
          ]
        }}
        />
      </Content>
    </Container>
    
  )
}