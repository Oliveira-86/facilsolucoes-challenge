import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../../../../core/types/User';
import './styles.scss';

type Props = {
    user: User;
    onRemove: (usersId: number) => void;
}

const Card = ({ user, onRemove }: Props) => {
    return (

        <div className="card-base user-card-admin">
            <div className="col-8">
                <ul className="card-user-data">
                    <li>
                        <h5 className=" info-card-data" >
                            {user.name}
                        </h5>
                    </li>
                    <li>
                        <h5 className=" info-card-data ">
                            {user.email}
                        </h5>
                    </li>
                </ul>

            </div>
            <div className="col-4 card-user-button">
                <Link to={`/admin/users/${user.id}`} 
                    type="button" 
                    className="btn btn-outline-primary btn-edit-exclude-card mr-2" 
                >
                    editar
                </Link>
                <button 
                    type="button" 
                    className="btn btn-outline-danger btn-edit-exclude-card" 
                    onClick={() => onRemove(user.id)}
                >
                    excluir
                </button>
            </div>

        </div>
    );
}

export default Card;