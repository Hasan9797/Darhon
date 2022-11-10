import React, {useEffect, useState} from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import {Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import axios from "axios";
import {toast} from "react-toastify";

const Xonadon = () => {

    const [xonadon, setXonadon] = useState([]);
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(!modal);
    }


    useEffect(() => {
        axios.get("http://185.217.131.79:3000/api/honadon")
            .then(res => {
                setXonadon(res.data.data);
            });
    }, []);

    const byId = (id) => document.getElementById(id).value;

    const addHonadon = () => {
        let obj = {
            Nomi: byId("Nomi"),
            Oshhona: byId("Oshhona"),
            MehmonHona: byId("MehmonHona"),
            Yotohona: byId("Yotohona"),
            Balkon: byId("Balkon"),
            Kirish: byId("Kirish"),
            Kvqiymadi: byId("Kvqiymadi"),
            UmmumiyMaydon: byId("UmmumiyMaydon"),
            Uyraqami: byId("Uyraqami"),
            BinoRaqami: byId("BinoRaqami"),
            ObectNomi: byId("ObectNomi"),
            Etaji: byId("Etaji"),
            Tip: byId("Tip")
        }

        axios.post("http://185.217.131.79:3000/api/honadon", obj)
            .then(() => {
                console.log("success");
                toast.success("successfully saved Honadon");
            }).catch(() => {
            console.log("error");
            toast.error("error");
        })
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
                    <h2>Qarizdorlar</h2>
                    <p onClick={openModal}>+</p>
                </div>

                <div className="obyect-item-content">
                    <Table bordered>
                        <thead>
                        <tr>
                            <th>Nomi</th>
                            <th>Oshhona</th>
                            <th>MehmonHona</th>
                            <th>Yotohona</th>
                            <th>Balkon</th>
                            <th>Kirish</th>
                            <th>Kvqiymadi</th>
                            <th>UmmumiyMaydon</th>
                            <th>Uyraqami</th>
                            <th>BinoRaqami</th>
                            <th>ObectNomi</th>
                            <th>Etaji</th>
                            <th>Tip</th>
                            <th colSpan="2">Action</th>
                        </tr>
                        </thead>
                        {xonadon &&
                            xonadon.map((item, i) =>
                                <tbody key={i}>
                                <tr>
                                    <td>{item.Nomi}</td>
                                    <td>{item.Oshhona}</td>
                                    <td>{item.MehmonHona}</td>
                                    <td>{item.Yotohona}</td>
                                    <td>{item.Balkon}</td>
                                    <td>{item.Kirish}</td>
                                    <td>{item.Kvqiymadi}</td>
                                    <td>{item.UmmumiyMaydon}</td>
                                    <td>{item.Uyraqami}</td>
                                    <td>{item.BinoRaqami}</td>
                                    <td>{item.ObectNomi}</td>
                                    <td>{item.Etaji}</td>
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
            </div>

            <Modal isOpen={modal}>
                <ModalHeader>
                    Honadon qushish
                </ModalHeader>
                <ModalBody>
                    <Input className="mt-2" id="Nomi" type="text" placeholder="Nomi"/>
                    <Input className="mt-2" id="Oshhona" type="text" placeholder="Oshhona"/>
                    <Input className="mt-2" id="MehmonHona" type="text" placeholder="MehmonHona"/>
                    <Input className="mt-2" id="Yotohona" type="text" placeholder="Yotohona"/>
                    <Input className="mt-2" id="Balkon" type="text" placeholder="Balkon"/>
                    <Input className="mt-2" id="Kirish" type="text" placeholder="Kirish"/>
                    <Input className="mt-2" id="Kvqiymadi" type="text" placeholder="Kvqiymadi"/>
                    <Input className="mt-2" id="UmmumiyMaydon" type="text" placeholder="UmmumiyMaydon"/>
                    <Input className="mt-2" id="Uyraqami" type="text" placeholder="Uyraqami"/>
                    <Input className="mt-2" id="BinoRaqami" type="text" placeholder="BinoRaqami"/>
                    <Input className="mt-2" id="ObectNomi" type="text" placeholder="ObectNomi"/>
                    <Input className="mt-2" id="Etaji" type="text" placeholder="Etaji"/>
                    <Input className="mt-2" id="Tip" type="text" placeholder="Tip"/>
                </ModalBody>
                <ModalFooter>
                    <Button color="" onClick={openModal}>Cancel</Button>
                    <Button color="success" onClick={addHonadon}>Save</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Xonadon
