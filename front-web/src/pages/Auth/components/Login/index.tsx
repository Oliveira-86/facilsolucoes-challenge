import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ButtonIcon from '../../../../core/components/ButtonIcon';
import AuthCard from '../Card';
import './styles.scss';
import { makeLogin } from '../../../../core/utils/Request';
import { saveSessionData } from '../../../../core/utils/OAuth';


type FormData = {
    username: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const [ hasValid, setHasValid ] = useState(false);
    const history = useHistory();

    const onSubmit = (data: FormData) => {
        makeLogin(data)
        .then(response => {
            setHasValid(false);
            saveSessionData(response.data);
            history.push('/admin');
        })
        .catch(() => {
            setHasValid(true);
        })
    }

    return (
        <AuthCard title="login">
            {hasValid && (
                <div className="alert alert-danger mt-5">
                    Usuário ou senha inválido
                </div>
            )}
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    className="form-control input-base margin-bottom "
                    placeholder="Email"
                    name="username"
                    ref={register ({ required : true })}
                />
                <input
                    type="password"
                    className="form-control input-base"
                    placeholder="Senha"
                    name="password"
                    ref={register ({ required : true })}
                />
                <Link to="/admin/auth/recover" className="login-link-recover">
                    Esqueci a senha?
                </Link>
                <div className="login-submit">
                    <ButtonIcon text="logar" />
                </div>
                <div className="text-center mb-5">
                    <span className="not-register">
                        Não tem Cadastro?
                    </span>
                    <Link to="/admin/auth/register" className="login-link-register">
                        CADASTRAR
                    </Link>
                </div>
            </form>

        </AuthCard>
    );
}

export default Login;