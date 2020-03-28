import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

import './style.css';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';


export default function Register(){
    //usando o estado para alterar os campos e conseguir salvar
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');


    const history = useHistory();

    //FUNÇÃO RESPONSÁVEL PELO CADASTRO DO USUARIO
    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try{
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/'); //faz com que o usuario volte pra página inicial
        }catch (err) { 
            alert('Erro no cadastro, tente novamente.');
        }
       

    }



    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude as pessoas encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="e02041"/>
                            Voltar para Logon
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name} //valor do nome
                        onChange={e => setName(e.target.value)} //salva o nome
                    />
                    <input
                            type="email" 
                            placeholder="E-mail"
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    
                    <div className="input-group">
                        <input 
                            placeholder="cidade"
                            value={city} //valor do nome
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder="UF" 
                            style={{width:80}}
                            value={uf} //valor do nome
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>

    );
}