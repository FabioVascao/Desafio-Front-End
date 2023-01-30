import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from 'react-icons/fi';
import { Container, Form, Avatar } from "./styles";

import {Button} from "../../components/Button";
import {Input} from "../../components/Input";

export function Profile() {
    return (
        <Container>  
            <header>
                <a href='/'>
                    <FiArrowLeft/>Voltar
                </a>
            </header>
            <Form>   
                 <Avatar>
                    <img 
                    src="https://github.com/fabiovascao.png" 
                    alt="Foto do Usuário" 
                    />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>

                <Input type="text" placeholder="Nome" icon={FiUser}/>
                <Input type="text" placeholder="E-mail" icon={FiMail}/>
                <Input type="password" placeholder="Senha atual" icon={FiLock}/>
                <Input type="password" placeholder="Nova senha" icon={FiLock}/>

                <Button title="Salvar"/>         
            </Form>   
        </Container>
    )
}