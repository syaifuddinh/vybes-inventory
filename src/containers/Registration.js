import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, FormControl, InputGroup, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { registration } from "../store/auth";

function App() {
    const [counter, setCounter] = useState(0);
    const [errorMessage, setError] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [data, setData] = useState({ name: "", username: "", password: "" });
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (key, value) => {
        const item = data;
        item[key] = value.trim();
        setData(item);
        setIsDisabled(!data.name || !data.username || !data.password)
    }

    const onSubmit = () => {
        const username = data.username;
        const name = data.name;
        const password = data.password;
        try {
            dispatch(registration({ name, username, password }));
            navigate("/login");
        } catch(e) {
            setError(e.toString());
        }
    }

    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Col md={7} xs={12} className="rounded-24px d-flex flex-column bg-white box-shadow-dark-grey p-24px">
                    <h1>Registrasi</h1>
                    <div class="h-24px"></div>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Nama Lengkap</InputGroup.Text>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={e => {
                                handleChange("name", e.target.value);
                            }}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Username</InputGroup.Text>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={e => {
                                handleChange("username", e.target.value);
                            }}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Password</InputGroup.Text>
                        <FormControl
                            type="password"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={e => {
                                handleChange("password", e.target.value);
                            }}
                        />
                    </InputGroup>
                    <p className="text-right">
                        Sudah punya akun ? silahkan lakukan login  
                        <Link to="/login" className="ml-3px">disini</Link>
                    </p>
                    <Button
                        variant="primary"
                        disabled={isDisabled}
                        onClick={onSubmit}
                    >
                        Submit
                    </Button>
                    { errorMessage ? <p className="text-center text-danger pt-8px">{ errorMessage }</p> : ""}
                </Col>
            </Row>
        </Container>
    );
}

export default App;
