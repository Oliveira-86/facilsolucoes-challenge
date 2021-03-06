import React from 'react';
import { Link } from 'react-router-dom';
import ContractsDate from '../../../../../core/components/ContractsDate';
import ContractsValue from '../../../../../core/components/ContractsValue';
import { Contracts } from '../../../../../core/types/Contracts';
import './styles.scss';

type Props = {
    contract: Contracts;
    onRemove: (contractsId: number) => void;
}

const Card = ({ contract, onRemove }: Props) => {
    return (

        <div className="card-base contract-card-admin">
            <div className="col-8">
                <ul className="card-contracts-data">
                    <li>
                        <h5 className=" info-card-data" >
                            {contract.name}
                        </h5>
                    </li>
                    <li>
                        <h5 className=" info-card-data info-card-marg">
                            <ContractsValue value={contract.value} />
                        </h5>
                    </li>
                    <li>
                        <h5 className=" info-card-data">
                            <ContractsDate date={contract.date} />
                        </h5>
                    </li>
                </ul>

            </div>
            <div className="col-4 card-contracts-button">
                <Link to={`/admin/contracts/${contract.id}`} 
                    type="button" 
                    className="btn btn-outline-primary btn-edit-exclude-card mr-2" 
                >
                    editar
                </Link>
                <button 
                    type="button" 
                    className="btn btn-outline-danger btn-edit-exclude-card" 
                    onClick={() => onRemove(contract.id)}
                >
                    excluir
                </button>
            </div>

        </div>
    );
}

export default Card;