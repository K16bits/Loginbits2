import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import Container from '../../Components/Container';
import Input from '../../Components/Input';
import Button from '../../Components/Button';


export default function Home() {

  const [Nome,setNome] = useState("");
  const [Senha,setSenha] = useState("");

  async function HandleSubmit(e){
    e.preventDefault();

    const data = {
      Nome,
      Senha
    }
    console.log(data);
  }

  return (
    <Container>
      <form onSubmit={HandleSubmit}>
        <Input name="Nome" placeholder="Email" autoComplete='off'
          onChange = { e => setNome(e.target.value) }
        ></Input>

        <Input name="Senha" type="password" placeholder="Senha"
          onChange = { e => setSenha(e.target.value)}
        ></Input>
        <Button type="submit">Entrar</Button>
        <Link to="/profile">Listar</Link>
      </form>
      
    </Container>
  );
}
