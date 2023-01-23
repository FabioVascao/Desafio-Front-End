import { FiArrowLeft, FiCalendar } from 'react-icons/fi';
import { Container, Link } from "./styles";
import { Header } from "../../components/Header";

export function MoviePreview() {
    return (
        <Container>
            <Header/>

            <main>
                <Link> <FiArrowLeft/> Voltar </Link>
                <h1>Interestellar</h1>
                <span><img 
                    src='https://github.com/fabiovascao.png' alt='Foto do Usuário'
                />  Por FabioVascão</span> <span> <FiCalendar/> 23/01/22 às 15:00</span>
            </main>
        </Container>
    )
}