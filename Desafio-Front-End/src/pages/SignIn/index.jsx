import { Container, Form, Background } from "./styles";

import {Button} from "../../components/Button";

export function SingIn() {
    return (
        <Container>
            <Form>

                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>

                <h2>Faça seu Login</h2>

                <input type="text" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>

                <Button title="Entrar"/>
            </Form>   
            <Background/>
        </Container>
    )
}