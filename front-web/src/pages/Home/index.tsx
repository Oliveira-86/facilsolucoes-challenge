import React from 'react';
import { ReactComponent as ImgHome } from '../../core/assets/images/logo_branca.svg';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../core/components/ButtonIcon';
import './styles.scss';

const Home = () => (

    <div className="home-container">
        <div className=" home-content">
            <div>
                <h1 className="text-title">Desafio CRUD </h1>
                <p className="text-subtitle">Desenvolvimento Fullstack  </p>
                <h1 className="text-subtitle-2"> ReactJS / Java</h1>
            </div>
            <Link to="/admin">
                <ButtonIcon text="cadastre-se" />   
            </Link>
        </div>
    </div>
);

export default Home;