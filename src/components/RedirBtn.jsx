import {NavLink} from 'react-router-dom';

const RedirBtn = ({title, redir, btnClass}) => {
    return (
        <NavLink
                activeClassName='menuLinkActive'
                className={`btn ${btnClass}`}
                to={`${redir}`}
            >
            {title}
        </NavLink>
    )
};

export default RedirBtn;