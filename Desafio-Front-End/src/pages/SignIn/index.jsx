import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Form, Background } from "./styles";

import {Button} from "../../components/Button";
import {Input} from "../../components/Input";
import { Link } from 'react-router-dom';

export function SignIn() {
    return (
        <Container>
            <Form>

                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>

                <h2>Faça seu Login</h2>

                <Input type="text" placeholder="E-mail" icon={FiMail}/>
                <Input type="password" placeholder="Senha" icon={FiLock}/>

                <Button title="Entrar"/>
                <Link to="/register">Criar conta</Link>
            </Form>   
            <Background/>
        </Container>
    )
}