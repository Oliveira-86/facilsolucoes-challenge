import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Pagination from '../../../../../core/components/Pagination';
import { ContractsResponse } from '../../../../../core/types/Contracts';
import { makePrivateRequest, makeResquest } from '../../../../../core/utils/Request';
import ContractsCardLoader from '../../ListCardLoader';
import Card from '../Card';
import './styles.scss';

const List = () => {
    const [contractsResponse, setContractsResponse] = useState<ContractsResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [ activePage, setActivePage ] = useState(0);
    const history = useHistory();

    const getContracts = useCallback(() => {

        const params = {
            page: activePage,
            linesPerPage: 6
        }

        setIsLoading(true);
        makeResquest({ url: '/contracts', params })
            .then(response => setContractsResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, [activePage]);

    useEffect(() => {
        getContracts();
    }, [getContracts]);

    const handleCreate = () => {
        return history.push('/admin/contracts/create');
    }

    const onRemove = (contractsId: number) => {
        const confirm = window.confirm('Deseja reamente excluir este contrato?')
      
        if(confirm) {
            makePrivateRequest({ url: `/contracts/${contractsId}`, method: 'DELETE' })
            .then(() => {
                toast.info('Contrato removido com sucesso!');
            })
            .catch(() => {
                toast.error('Error ao removido contrato')
            })
        }
    };


    return (
        <div className="admin-contracts-list">
            <div className="btn btn-primary btn-lg" onClick={handleCreate}>
                ADICIONAR
            </div>
            <div className="admin-list-container">
                {isLoading ? <ContractsCardLoader /> : (
                    contractsResponse?.content.map(contract => (
                        <Card contract={contract} key={contract.id} onRemove={onRemove} />
                    ))
                )}
            </div>
            {contractsResponse && (
                <Pagination 
                    totalPages={contractsResponse?.totalPages}
                    activePage={activePage}
                    onChange={page => setActivePage(page)}
                />
            
            )}
                             
        </div>
    );
}

export default List;