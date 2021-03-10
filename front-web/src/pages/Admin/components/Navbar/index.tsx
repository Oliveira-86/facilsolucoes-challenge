import { NavLink } from 'react-router-dom';
import { isAllowedByRole } from '../../../../core/utils/OAuth';
import './styles.scss';

const Navbar = () => (

    <nav className="admin-nav-container">
        <ul>
            <li>
                <NavLink to="/admin/contracts" className="admin-nav-item">
                    <p className="admin-nav-text">Meus Contratos</p>
                </NavLink>
            </li>
           {isAllowedByRole(['ROLE_ADMIN']) && (
                <li>
                    <NavLink to="/admin/users" className="admin-nav-item">
                        <p className="admin-nav-text">Meus Usuários</p>
                    </NavLink>
                </li>
           )}
        </ul>
    </nav>
);

export default Navbar;