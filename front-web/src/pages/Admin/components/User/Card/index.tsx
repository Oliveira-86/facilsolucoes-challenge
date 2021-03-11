import React from 'react';
import { Link } from 'react-router-dom';
import UserDate from '../../../../../core/components/UserDate';
import UserValue from '../../../../../core/components/ContractsValue';
import { Contracts as User } from '../../../../../core/types/Contracts';
import './styles.scss';

type Props = {
    contract: User;
    onRemove: (UserId: number) => void;
}

const Card = ({ contract, onRemove }: Props) => {
    return (

        <div className="card-base contract-card-admin">
            <div className="col-8">
                <ul className="card-User-data">
                    <li>
                        <h5 className=" info-card-data" >
                            {contract.name}
                        </h5>
                    </li>
                    <li>
                        <h5 className=" info-card-data info-card-marg">
                            <UserValue value={contract.value} />
                        </h5>
                    </li>
                    <li>
                        <h5 className=" info-card-data">
                            <UserDate date={contract.date} />
                        </h5>
                    </li>
                </ul>

            </div>
            <div className="col-4 card-User-button">
                <Link to={`/admin/User/${contract.id}`} 
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