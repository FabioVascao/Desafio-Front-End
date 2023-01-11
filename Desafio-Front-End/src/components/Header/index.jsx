import { Container, Profile, Title, Input } from './styles';

export function Header(){
    return (
        <Container>
            <Title>
                <h1>RocketMovies</h1>
            </Title>
            <Input 
                placeholder="Pesquisar pelo título"
                type="text"
            />
            <Profile to="/profile">
                <div>
                    <strong>FabioVascão</strong>
                    <span>Sair</span>
                </div>
                <img 
                    src='https://github.com/fabiovascao.png' alt='Foto do Usuário'
                />      
            </Profile>
        </Container>
    )
}