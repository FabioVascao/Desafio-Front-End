import { FiArrowLeft } from 'react-icons/fi';
import {Container, Content, New, Buttons} from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';

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
    
          <Section title='Marcadores'>
              <div className="Tags">
                  <NoteItem value="React"/>
                  <NoteItem placeholder="Novo Marcador" isNew/>
              </div>
          </Section>

          <Buttons>
            <Button title='Excluir Filme'></Button>
            <Button title='Salvar Alterações'></Button>
          </Buttons>

        </Content>
      </main>
      
      
    </Container>
    
  )
}