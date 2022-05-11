import Form from "./Form";
import { useDispatch, useSelector } from 'react-redux'
import { storeData } from "../store/index";

function App({ onClick }) {
    const dispatch = useDispatch();
    const username = useSelector(state => state.auth.loggedIn.username);

    return (
        <Form
            title="Tambah Barang Baru"
            onSubmit={ ({name, description, qty, checked}) => {
                const id = Math.round(Math.random() * 999999);
                const date = new Date();

                dispatch(storeData({
                    id,
                    title: name,
                    username,
                    status: (checked ? 1 : 0),
                    createdDate: date,
                    qty,
                    description
                }));
            } }
        >
            <div
                className="rounded-24px text-center d-flex justify-content-center align-items-center h-300px bg-dark box-shadow-dark-grey"
            >
                <div className="font-weight-700 text-primary fs-24px">
                    Buat <br />
                    Barang <br />
                    Baru
                </div>
            </div>
        </Form>
      );
    }

export default App;
