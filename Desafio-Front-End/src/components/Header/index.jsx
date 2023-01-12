import { Container, Profile, Title, Search } from './styles';

export function Header(){
    return (
        <Container>
            <Title>
                <h1>RocketMovies</h1>
            </Title>
            <Search>
                <input type="text" placeholder='Pesquisar pelo título' />
            </Search>    
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