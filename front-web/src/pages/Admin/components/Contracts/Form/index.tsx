import React from 'react';
import { useForm } from 'react-hook-form';
import { makeResquest } from '../../../../../core/utils/Request';
import BaseForm from '../../BaseForm';

type ContractData = {
    name: string;
    value: number;
    date: string;
}

const Form = () => {

  const { register, handleSubmit } = useForm();

  const onSubmit = ( data: ContractData ) => {
    makeResquest({method:'POST', url:'/contracts/create', data:data});
    
  }

    return (

        <BaseForm title="Cadastrar um Contrato">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="text" 
                    placeholder="Nome" 
                    className="form-control input-base margin-bottom"
                    name=""
                />
                <input 
                    type="text" 
                    placeholder="Valor" 
                    className="form-control input-base margin-bottom col-6"
                />
                <input 
                    type="date" 
                    placeholder="Data" 
                    className="form-control input-base margin-bottom col-6"
                />
            </form>
        </BaseForm>



    );
}

export default Form;