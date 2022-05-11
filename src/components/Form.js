import React, { useState, useEffect } from 'react';
import Modal from "./Modal";
import { InputGroup, FormControl } from "react-bootstrap";

function App({ id, title, children, onSubmit, dataValue }) {
    const [data, setData] = useState({ name: "", description: "" });
    const [checked, setChecked] = useState(false);
    const nameEl = React.createRef();
    const qtyEl = React.createRef();
    const descriptionEl = React.createRef();

    const handleChange = (key, value) => {
        const item = data;
        item[key] = value;
        setData(item);
    }

    useEffect(() => {
        if(dataValue) {
            setData(dataValue);
        }
    }, []);

    return (
        <Modal
            title={title}
            trigger={children}
            onOpen={() => {
                setTimeout(() => {
                    if(dataValue) {
                        nameEl.current.setAttribute('value', dataValue.name);
                        qtyEl.current.setAttribute('value', dataValue.qty);
                        descriptionEl.current.setAttribute('value', dataValue.description);
                    }
                }, 1000);
            }}
            onSubmit={() => {
                if(onSubmit) {
                    const response = data;
                    response.checked = checked;
                    onSubmit(response);
                }
            }}
        >
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">Nama Barang</InputGroup.Text>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    ref={nameEl}
                    onChange={e => {
                        handleChange("name", e.target.value);
                    }}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">Jumlah Barang</InputGroup.Text>
                <FormControl
                    type="number"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    ref={qtyEl}
                    onChange={e => {
                        handleChange("qty", e.target.value);
                    }}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">Deskripsi</InputGroup.Text>
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  ref={descriptionEl}
                  onChange={e => {
                      handleChange("description", e.target.value);
                  }}
                />
            </InputGroup>
        </Modal>
  );
}

export default App;
