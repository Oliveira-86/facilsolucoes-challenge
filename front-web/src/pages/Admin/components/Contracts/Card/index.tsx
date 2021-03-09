import React from 'react';
import ContractsDate from '../../../../../core/components/ContractsDate';
import ContractsValue from '../../../../../core/components/ContractsValue';
import { Contracts } from '../../../../../core/types/Contracts';
import './styles.scss';

type Props = {
    contract: Contracts;
}

const Card = ({ contract }: Props) => {
    return (

        <div className="card-base contract-card-admin">
            <div className="col-8 card-contracts-data">
                <h5 className="contract-card-text" >
                    {contract.name}
                </h5>
                <span>
                    <ContractsValue value={contract.value} />
                </span>
                <span>
                    <ContractsDate date={contract.date} />
                </span>
            </div>
            <div className="col-4 card-contracts-button">
                <button type="button" className="btn btn-outline-primary btn-edit-exclude-card mr-2" >
                    editar
                </button>
                <button type="button" className="btn btn-outline-danger btn-edit-exclude-card" >
                    excluir
                </button>
            </div>

        </div>
    );
}

export default Card;