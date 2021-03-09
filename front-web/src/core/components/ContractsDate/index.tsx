import './styles.scss';

type Props = {
    date: string;
}

const formatDate = ( date: string ) => {
    let dateF = new Date(date);
    return dateF.toLocaleDateString();
}

const ContractsDate = ({ date }: Props) => (
    <div className="contract-date-container">
        <h3 className="contracts-date">{formatDate(date)}</h3>
    </div>
);

export default ContractsDate;