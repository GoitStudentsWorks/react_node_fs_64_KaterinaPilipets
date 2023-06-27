import * as React from 'react';
import { Container, Button, Icon } from './Logout.styled';
import { logout } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
// import { clearToken } from '../../../redux/auth/authSlice';
// import { logout } from '../../../services/auth-services';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // // const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/welcome');
  };

  return (
    <Container>
      <Button onClick={handleLogout}>
        <Icon />
        Log out
      </Button>
    </Container>
  );
};

export default Logout;
