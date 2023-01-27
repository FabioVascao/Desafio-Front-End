import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Form, Background } from "./styles";

import {Button} from "../../components/Button";
import {Input} from "../../components/Input";

export function SingIn() {
    return (
        <Container>
            <Form>

                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>

                <h2>Faça seu Login</h2>

                <Input type="text" placeholder="E-mail" icon={FiMail}/>
                <Input type="password" placeholder="Senha" icon={FiLock}/>

                <Button title="Entrar"/>
            </Form>   
            <Background/>
        </Container>
    )
}