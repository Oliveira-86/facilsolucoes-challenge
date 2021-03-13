import React from 'react';
import { ReactComponent as ImgHome } from '../../core/assets/images/logo_branca.svg';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../core/components/ButtonIcon';
import './styles.scss';

const Home = () => (

    <div className="home-container">
        <div className=" home-content">
            <div>
                <h1 className="text-title">Desafio Fácil Soluções</h1>
                <p className="text-subtitle">Vaga para Desenvolvedor Frontend - React </p>
                <ImgHome />
            </div>
            <Link to="/admin">
                <ButtonIcon text="cadastre-se" />   
            </Link>
        </div>
    </div>
);

export default Home;