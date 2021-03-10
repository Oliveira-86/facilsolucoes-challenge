import { useForm } from 'react-hook-form';
import { makeResquest } from '../../../../../core/utils/Request';
import { toast } from 'react-toastify'
import BaseForm from '../../BaseForm';
import history from '../../../../../core/utils/history';

type ContractData = {
    name: string;
    value: number;
    date: string;
}

const Form = () => {

    const { register, handleSubmit, errors } = useForm<ContractData>();

    const onSubmit = (data: ContractData) => {
        makeResquest({ url: '/contracts', method: 'POST', data: data })
        .then(() => {
            toast.info('Contrato salvo com sucesso!');
            history.push('/admin/contracts');
        })
        .catch(() => {
            toast.error('Error ao salvar contrato')
        })
    }

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <BaseForm title="Cadastrar um Contrato">
                <div className="margin-bottom">
                    <input
                        name="name"
                        type="text"
                        placeholder="Nome"
                        className="form-control input-base"
                        ref={register({ 
                            required: "Campo obrigatório",
                            minLength: { value: 5, message: 'O campo deve ter no mínimo 5 caracteres' },
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
                        type="number "
                        placeholder="Valor"
                        className="form-control input-base margin-bottom col-6"
                        name="value"
                        ref={register({ required: "Campo obrigatório" })}
                    />
                </div>
                {errors.value && (
                    <div className="invalid-feedback d-block">
                        {errors.value.message}
                    </div>
                )}
                <div className="margin-bottom">
                    <input
                        type="date"
                        placeholder="Data"
                        className="form-control input-base margin-bottom col-6"
                        name="date"
                        ref={register({ required: "Campo obrigatório" })}
                    />
                </div>
                {errors.date && (
                    <div className="invalid-feedback d-block">
                        {errors.date.message}
                    </div>
                )}
            </BaseForm>
        </form>

    );
}

export default Form;