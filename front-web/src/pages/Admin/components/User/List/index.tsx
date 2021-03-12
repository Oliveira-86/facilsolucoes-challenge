import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Pagination from '../../../../../core/components/Pagination';
import { UserResponse } from '../../../../../core/types/User';
import { makePrivateRequest } from '../../../../../core/utils/Request';
import ListCardLoader from '../../ListCardLoader';
import Card from '../UserCard';


const List = () => {
    const [userResponse, setUserResponse] = useState<UserResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [ activePage, setActivePage ] = useState(0);
    const history = useHistory();

    const getUser = useCallback(() => {

        const params = {
            page: activePage,
            linesPerPage: 6
        }

        setIsLoading(true);
        makePrivateRequest({ url: '/users', params })
            .then(response => setUserResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, [activePage]);

    useEffect(() => {
        getUser();
    }, [getUser]);

    const handleCreate = () => {
        return history.push('/admin/users/create');
    }

    const onRemove = (usersId: number) => {
        const confirm = window.confirm('Deseja reamente excluir este usuário?')
      
        if(confirm) {
            makePrivateRequest({ url: `/users/${usersId}`, method: 'DELETE' })
            .then(() => {
                toast.info('Usuário removido com sucesso!');
            })
            .catch(() => {
                toast.error('Error ao remover Usuário')
            })
        }
    };


    return (
        <div className="admin-user-list">
            <div className="btn btn-primary btn-lg" onClick={handleCreate}>
                ADICIONAR
            </div>
            <div className="admin-list-container">
                {isLoading ? <ListCardLoader /> : (
                    userResponse?.content.map(user => (
                        <Card user={user} key={user.id} onRemove={onRemove} />
                    ))
                )}
            </div>
            {userResponse && (
                <Pagination 
                    totalPages={userResponse?.totalPages}
                    activePage={activePage}
                    onChange={page => setActivePage(page)}
                />
            
            )}
                             
        </div>
    );
}

export default List;