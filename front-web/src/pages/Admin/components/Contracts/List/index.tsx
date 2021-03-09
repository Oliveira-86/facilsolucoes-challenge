import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ContractsResponse } from '../../../../../core/types/Contracts';
import { makeResquest } from '../../../../../core/utils/Request';
import ContractsCardLoader from '../../ContractsCardLoader';
import Card from '../Card';
import './styles.scss';

const List = () => {
    const [contractsResponse, setContractsResponse] = useState<ContractsResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleCreate = () => {
        return history.push('/admin/contracts/create');
    }

    useEffect(() => {

        const params = {
            page: 0,
            linesPerPage: 12
        }

        setIsLoading(true);
        makeResquest({ url: '/contracts', params })
            .then(response => setContractsResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, []);


    return (
        <div className="admin-contracts-list">
            <div className="btn btn-primary btn-lg" onClick={handleCreate}>
                ADICIONAR
            </div>
            <div className="admin-list-container">
                {isLoading ? <ContractsCardLoader /> : (
                    contractsResponse?.content.map(contract => (
                        <Card contract={contract} />
                    ))
                )}
            </div>

        </div>
    );
}

export default List;