import { useDispatch, useSelector } from 'react-redux'
import { deleteData, updateData } from "../store/index";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { ButtonGroup } from "react-bootstrap";
import Form from "./Form";

function App({ id, title, qty,  description, createdDate, isShowEdit }) {
    const dispatch = useDispatch();
    const username = useSelector(state => state.auth.loggedIn.username);

    return (
        <div className="rounded-24px d-flex flex-column h-300px bg-white box-shadow-dark-grey p-24px">
            <div className="flex-grow-1 ">
                <ButtonGroup>
                    { isShowEdit === true && (
                        <Form
                            title="Edit Barang"
                            dataValue={{name: title, qty, description}}
                            onSubmit={ ({name, description, qty, checked}) => {
                                dispatch(updateData({
                                    id,
                                    title: name,
                                    status: (checked ? 1 : 0),
                                    username,
                                    qty,
                                    description
                                }));
                            } }
                        >
                            <EditButton />
                        </Form>
                    ) }
                    <DeleteButton
                        onClick={() => {
                            dispatch(deleteData({ id }));
                        }}
                    />
                </ButtonGroup>
            </div>
            <div className="font-weight-600 fs-20px text-center">
                { title }
            </div>
            <div className="font-weight-600 fs-16px mt-4px text-center">
                Jumlah : { qty }
            </div>
            <div className="font-weight-600 fs-16px mt-4px text-center">
                Deskripsi : { description }
            </div>
        </div>
    );
}

export default App;
