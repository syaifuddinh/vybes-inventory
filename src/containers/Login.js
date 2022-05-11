import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, FormControl, InputGroup, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { login } from "../store/auth";
import {
  Navigate
} from "react-router-dom";

function App() {
    const [counter, setCounter] = useState(0);
    const [isDisabled, setIsDisabled] = useState(true);
    const [data, setData] = useState({ username: "", password: "" });
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    const handleChange = (key, value) => {
        const item = data;
        item[key] = value.trim();
        setData(item);
        setIsDisabled(!data.username || !data.password)
    }

    const onLogin = () => {
        const username = data.username;
        const password = data.password;
        dispatch(login({ username, password }));
        setCounter(counter + 1);
    }

    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Col md={7} xs={12} className="rounded-24px d-flex flex-column bg-white box-shadow-dark-grey p-24px">
                    <h1>Silahkan Login</h1>
                    <div class="h-24px"></div>
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
                        Belum punya akun ? silahkan lakukan registrasi  
                        <Link to="/registration" className="ml-3px">disini</Link>
                    </p>
                    <Button
                        variant="primary"
                        key={data.username}
                        disabled={isDisabled}
                        onClick={onLogin}
                    >
                        Login
                    </Button>
                    { counter > 0 && isLoggedIn === false ? <p className="text-center text-danger pt-8px">Username atau password tidak ditemukan</p> : ""}
                </Col>
            </Row>

            { isLoggedIn === true ? (
                <Navigate
                    to="/"
                />
            ) : null }
        </Container>
    );
}

export default App;
