import './styles.scss';

type Props = {
    value: number;
}

const formatPrice = ( value: number ) => {
    return Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2}).format(value);
}

const ContractsValue = ({ value }: Props) => (
    <div className="contract-value-container">
        <span className="contract-currency">R$</span>
        <h3 className="contracts-value">{formatPrice(value)}</h3>
    </div>
);

export default ContractsValue;