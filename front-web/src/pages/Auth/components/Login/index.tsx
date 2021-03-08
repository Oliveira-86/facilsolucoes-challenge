import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import ButtonIcon from '../../../../core/components/ButtonIcon';
import AuthCard from '../Card';
import './styles.scss';


type FormData = {
    username: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit } = useForm<FormData>();
    
    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return(
           <AuthCard title="login">
               <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        type="email"
                        className="form-control input-base margin-bottom "
                        placeholder="Email"
                        name="username"
                        ref={register}
                    />
                      <input 
                        type="password"
                        className="form-control input-base"
                        placeholder="Senha"
                        name="password"
                        ref={register}
                    />
               </form>
               <Link to="/admin/auth/recover" className="login-link-recover">
                   Esqueci a senha?
                </Link>
                <div className="login-submit">
                    <ButtonIcon text="logar" />
                </div> 
                <div className="text-center mb-5">
                    <span className="not-register"> Não tem Cadastro? </span>
                    <Link to="/admin/auth/register" className="login-link-register">
                        CADASTRAR
                    </Link>
                </div>
           </AuthCard>
    );
}

export default Login;