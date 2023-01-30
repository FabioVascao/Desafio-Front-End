import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Container, Form, Background } from "./styles";

import {Button} from "../../components/Button";
import {Input} from "../../components/Input";

export function SingUp() {
    return (
        <Container>
            <Form>

                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>

                <h2>Crie sua conta</h2>

                <Input type="text" placeholder="Nome" icon={FiUser}/>
                <Input type="text" placeholder="E-mail" icon={FiMail}/>
                <Input type="password" placeholder="Senha" icon={FiLock}/>

                <Button title="Cadastrar"/>
                <a href="#"><FiArrowLeft/>Volte para o login</a>
            </Form>   
            <Background/>
        </Container>
    )
}