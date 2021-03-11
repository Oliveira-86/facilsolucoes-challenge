import { useForm } from 'react-hook-form';
import { makePrivateRequest, makeResquest } from '../../../../../core/utils/Request';
import { toast } from 'react-toastify'
import BaseForm from '../../BaseForm';
import history from '../../../../../core/utils/history';
import { useHistory, useParams } from 'react-router';
import { useEffect } from 'react';

type ContractData = {
    name: string;
    value: number;
    date: string;
}

type ParamsType = {
    contractsId: string;
}

const Form = () => {

    const { register, handleSubmit, errors, setValue } = useForm<ContractData>();
    const history = useHistory();
    const { contractsId } = useParams<ParamsType>();
    const isEditing = contractsId !== 'create';
    const formTitle = isEditing ? 'editar contrato' : 'cadastra contrato';

    useEffect(() => {
     if(isEditing) {
        makeResquest({ url: `/contracts/${contractsId}` }) 
        .then(response => {
            setValue('name', response.data.name);
            setValue('value', response.data.value);
            setValue('date', response.data.date);
        })
     }
    }, [contractsId, isEditing, setValue]);
 
    const onSubmit = (data: ContractData) => {

        makePrivateRequest({ 
            url: isEditing ? `/contracts/${contractsId}` : '/contracts', 
            method: isEditing ? 'PUT' : 'POST', 
            data 
        })
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
                        type="number"
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