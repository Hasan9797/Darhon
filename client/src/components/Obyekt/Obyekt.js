import React, {useEffect, useState} from 'react';
import '../../styles/Obyekt.css';
import {AiOutlineSearch} from "react-icons/ai";
import axios from "axios";
import {Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import {toast} from "react-toastify";

const Obyekt = () => {

    const [objects, setObject] = useState([]);
    const [modal, setModal] = useState(false);

    const saveObject = () => {
        let obj = {
            Name: document.getElementById("Nomi").value,
            Ummumy: document.getElementById("Ummumy").value,
            Bino: document.getElementById("Bino").value,
            QurilishniBoshlanishSanasi: document.getElementById("QurilishniBoshlanishSanasi").value,
            QurilishniBitirishSanasi: document.getElementById("QurilishniBitirishSanasi").value,
            Tip: document.getElementById("Tip").value
        }
        axios.post("http://185.217.131.79:3000/api/object", obj)
            .then(() => {
                toast.success("successfully saved object");
                console.log("success")
            }).catch(() => {
            console.log("error");
            toast.error("error");
        })
    }

    const openModal = () => {
        setModal(!modal);
    }

    useEffect(() => {
        axios.get("http://185.217.131.79:3000/api/object")
            .then(res => {
                setObject(res.data.data);
            })
    }, []);


    return (
        <div className='obyekt'>
            <h1>Obyekt</h1>
            <div className="obyekt-item">
                <form className='obyekt-item__form'>
                    <input className='obyekt-item__search' type="text" placeholder='Input search text'/>
                    <button className="search-btn"><AiOutlineSearch/></button>
                </form>

                <div className="obyekt-item__card">
                    <h2>Obyektlar</h2>
                    <p onClick={openModal}>+</p>
                </div>

                <Table bordered>
                    <thead>
                    <tr>
                        <th>Nomi</th>
                        <th>Umumy</th>
                        <th>Bino</th>
                        <th>Qurilishni Boshlanish Sanasi</th>
                        <th>Qurilishni bitirish sanasi</th>
                        <th>Tip</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    {objects &&
                        objects.map((item, i) =>
                            <tbody key={i}>
                            <tr>
                                <td>{item.Nomi}</td>
                                <td>{item.Ummumy}</td>
                                <td>{item.Bino}</td>
                                <td className="w-25">{item.QurilishniBoshlanishSanasi}</td>
                                <td>{item.QurilishniBitirishSanasi}</td>
                                <td>{item.Tip}</td>
                                <td>
                                    <Button outline color="success">O'zgartrish</Button>
                                </td>
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
                    Object qushish
                </ModalHeader>
                <ModalBody>
                    <Input className="mt-2" id="Nomi" type="text" placeholder="Nomi"/>
                    <Input className="mt-2" id="Ummumy" type="text" placeholder="Ummumy"/>
                    <Input className="mt-2" id="Bino" type="text" placeholder="Bino"/>
                    <Input className="mt-2" id="QurilishniBoshlanishSanasi" type="text"
                           placeholder="Qurilishni Boshlanish Sanasi"/>
                    <Input className="mt-2" id="QurilishniBitirishSanasi" type="text"
                           placeholder="QurilishniBitirishSanasi"/>
                    <Input className="mt-2" id="Tip" type="text" placeholder="Tip"/>
                </ModalBody>
                <ModalFooter>
                    <Button color="" onClick={openModal}>Cancel</Button>
                    <Button color="success" onClick={saveObject}>Save</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Obyekt
