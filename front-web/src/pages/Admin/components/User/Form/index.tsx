import { useForm } from 'react-hook-form';
import { makePrivateRequest } from '../../../../../core/utils/Request';
import { toast } from 'react-toastify'
import BaseForm from '../../BaseForm';
import { useHistory, useParams } from 'react-router';
import { useEffect } from 'react';

type UserData = {
    name: string;
    email: string;
    password: string;
}

type ParamsType = {
    usersId: string;
}

const Form = () => {

    const { register, handleSubmit, errors, setValue } = useForm<UserData>();
    const history = useHistory();
    const { usersId } = useParams<ParamsType>();
    const isEditing = usersId !== 'create';
    const formTitle = isEditing ? 'editar usuário' : 'cadastra usuário';

    useEffect(() => {
        if (isEditing) {
            makePrivateRequest({ url: `/users/${usersId}` })
                .then(response => {
                    setValue('name', response.data.name);
                    setValue('email', response.data.email);
                })
        }
    }, [usersId, isEditing, setValue]);

    const onSubmit = (data: UserData) => {

        makePrivateRequest({
            url: isEditing ? `/users/${usersId}` : '/users',
            method: isEditing ? 'PUT' : 'POST',
            data
        })
            .then(() => {
                toast.info('Usuário salvo com sucesso!');
                history.push('/admin/users');
            })
            .catch(() => {
                toast.error('Error ao salvar usuário')
            })
    }

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <BaseForm title={formTitle}>
                <div className="margin-bottom">
                    <input
                        name="name"
                        type="text"
                        placeholder="Nome"
                        className="form-control input-base"
                        ref={register({
                            required: "Campo obrigatório",
                            minLength: { value: 3, message: 'O campo deve ter no mínimo 5 caracteres' },
                            maxLength: { value: 60, message: 'O campo deve ter no máximo 60 caracteres' }
                        })}
                    />
                    {errors.name && (
                        <div className="invalid-feedback d-block">
                            {errors.name.message}
                        </div>
                    )}
                </div>
                <div className="margin-bottom">
                    <input
                        type="text"
                        placeholder="Email"
                        className="form-control input-base margin-bottom col-6"
                        name="email"
                        ref={register({ required: "Campo obrigatório" })}
                    />
                </div>
                {errors.email && (
                    <div className="invalid-feedback d-block">
                        {errors.email.message}
                    </div>
                )}
                <div className="margin-bottom">
                    <input
                        type="password"
                        className={`form-control input-base col-6 ${errors.password ? 'is-invalid' : ''}`}
                        placeholder="Senha"
                        name="password"
                        ref={register({ required: "Campo obrigatório" })}
                    />
                    {errors.password && (
                        <div className="invalid-feedback d-block">
                            {errors.password.message}
                        </div>
                    )}
                </div>
            </BaseForm>
        </form>

    );
}

export default Form;