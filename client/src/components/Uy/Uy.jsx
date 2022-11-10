import React, {useEffect, useState} from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import axios from "axios";
import '../../styles/Uy.css';
import {Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import {toast} from "react-toastify";

const Uy = () => {
    const [uy, setUy] = useState([]);
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(!modal);
    }

    const byId = (id) => document.getElementById(id).value;

    useEffect(() => {
        axios.get("http://185.217.131.79:3000/api/bino")
            .then(res => {
                setUy(res.data.data);
            });
    }, []);

    const saveUy = () => {
        let obj = {
            Nomi: byId("Nomi"),
            Object: byId("Object"),
            Qavatliligi: byId("Qavatliligi"),
            PodezlarSoni: byId("PodezlarSoni"),
            HonalarSoni: byId("HonalarSoni"),
            Raqam: byId("Raqam"),
            UmmumyKvadrati: byId("UmmumyKvadrati"),
            Tip: byId("Tip")
        }
        console.log(obj);
        axios.post("http://185.217.131.79:3000/api/bino", obj)
            .then(() => {
                toast.success("successfully saved!");
            }).catch(() => {
                toast.error("error");
        });
    }

    return (
        <div className='obyekt'>
            <h1>Uy</h1>
            <div className="obyekt-item">
                <form className='obyekt-item__form'>
                    <input className='obyekt-item__search' type="text" placeholder='Input search text'/>
                    <button className="search-btn"><AiOutlineSearch/></button>
                </form>

                <div className="obyekt-item__card">
                    <h2>Uylar</h2>
                   <p onClick={openModal}>+</p>
                </div>

                <Table bordered>
                    <thead>
                    <tr>
                        <th>Nomi</th>
                        <th>Object</th>
                        <th>Qavatliligi</th>
                        <th>PodezlarSoni</th>
                        <th>HonalarSoni</th>
                        <th>Raqam</th>
                        <th>UmmumyKvadrati</th>
                        <th>Tip</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    {uy &&
                        uy.map((item, i) =>
                            <tbody key={i}>
                            <tr>
                                <td>{item.Nomi}</td>
                                <td>{item.Object}</td>
                                <td>{item.Qavatliligi}</td>
                                <td>{item.PodezlarSoni}</td>
                                <td>{item.HonalarSoni}</td>
                                <td>{item.Raqam}</td>
                                <td>{item.UmmumyKvadrati}</td>
                                <td>{item.Tip}</td>
                                {/*<td>*/}
                                {/*    <Button outline color="success">O'zgartrish</Button>*/}
                                {/*</td>*/}
                                <td>
                                    <Button outline color="danger">O'chirish</Button>
                                </td>
                            </tr>

                            </tbody>
                        )
                    }
                </Table>

            </div>
            <Modal isOpen={modal}>
                <ModalHeader>
                    Uy qushish
                </ModalHeader>
                <ModalBody>
                    <Input className="mt-2" id="Nomi" type="text" placeholder="Nomi"/>
                    <Input className="mt-2" id="Object" type="text" placeholder="Object"/>
                    <Input className="mt-2" id="Qavatliligi" type="text" placeholder="Qavatliligi"/>
                    <Input className="mt-2" id="PodezlarSoni" type="text" placeholder="PodezlarSoni"/>
                    <Input className="mt-2" id="HonalarSoni" type="text" placeholder="HonalarSoni"/>
                    <Input className="mt-2" id="Raqam" type="text" placeholder="Raqam"/>
                    <Input className="mt-2" id="UmmumyKvadrati" type="text" placeholder="UmmumyKvadrati"/>
                    <Input className="mt-2" id="Tip" type="text" placeholder="Tip"/>
                </ModalBody>
                <ModalFooter>
                    <Button color="" onClick={openModal}>Cancel</Button>
                    <Button color="success" onClick={saveUy}>Save</Button>
                </ModalFooter>
            </Modal>

        </div>
    )
}

export default Uy
