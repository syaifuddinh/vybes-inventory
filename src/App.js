import React from 'react'
import Transition from 'react-addons-css-transition-group';
import { useSelector } from 'react-redux';
import CreateButton from "./components/CreateButton";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { Container, Row, Col } from 'react-bootstrap';


function App() {
    const data = useSelector((state) => state.index);
    const username = useSelector(state => state.auth.loggedIn.username);

    return (
        <>
            <Navbar />
            <Container className="mt-32px">
                <h1>Inventori</h1>
                <Row>
                    <Col md={3} xs={12} >
                        <div class="h-24px"></div>
                        <CreateButton />
                    </Col>
                    { data.items
                        .filter(value => value.username === username)
                        .map(value => (
                        <Transition
                            transitionName = "default"
                            transitionAppear = {true}
                            transitionAppearTimeout = {500}
                            transitionEnter = {false}
                            transitionLeave = {false}
                            className="col-md-3 col-xs-12"
                        >
                            <div  key={value.id}>
                                <div class="h-24px"></div>
                                <Card
                                    id={value.id}
                                    title={value.title}
                                    qty={value.qty}
                                    description={value.description}
                                    createdDate={value.createdDate}
                                    isShowEdit={value.status === 0}
                                />
                            </div>
                        </Transition>
                    )) }
                </Row>

            </Container>
        </>
    );
}

export default App;
