import { Container, Navbar, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/auth';

function App() {
    const name = useSelector((state) => state.auth.loggedIn.name);
    const dispatch = useDispatch();

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="d-flex justify-content-end">
                    <Nav className="d-flex align-items-center">
                        <Nav.Link >{ name }</Nav.Link>
                        <div className="mx-16px">|</div>
                        <Nav.Link onClick={() => { dispatch(logout()) }}>
                            Logout
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default App;
