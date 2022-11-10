
import React, {useState} from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import {Button, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const Shartnoma = () => {

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(!modal);
    }

    return (
    <div className='obyekt'>
    <h1>Shartnoma</h1>

    <div className="obyekt-item">
       <form className='obyekt-item__form'>
         <input className='obyekt-item__search' type="text" placeholder='Input search text' />
         <button className="search-btn"><AiOutlineSearch/></button>
       </form>

       <div className="obyekt-item__card">
        <h2>Qarizdorlar</h2>
        <p onClick={openModal}>+</p>
       </div>

       <div className="obyect-item-content">
         <p>Shartnoma</p>
       </div>
    </div>
        <Modal isOpen={modal}>
            <ModalHeader>
                Uy qushish
            </ModalHeader>
            <ModalBody>
                <Input className="mt-2" id="maydon" type="text" placeholder="umumiy maydoni"/>
                <Input className="mt-2" id="oshxona" type="text" placeholder="oshxona"/>
                <Input className="mt-2" id="mexmonxona" type="text" placeholder="mexmonxona"/>
                <Input className="mt-2" id="yotoq" type="text" placeholder="yotoq xona"/>
                <Input className="mt-2" id="balkon" type="text" placeholder="balkon"/>
                <Input className="mt-2" id="nomi" type="text" placeholder="nomi"/>
                <Input className="mt-2" id="kv_qiymati" type="text" placeholder="kv qiymati"/>
                <Input className="mt-2" id="kirish" type="text" placeholder="kirinsh"/>
                <Input className="mt-2" id="uy_raqami" type="text" placeholder="Uy raqami"/>
                <Input className="mt-2" id="bino_raqami" type="text" placeholder="bino raqami"/>
                <Input className="mt-2" id="etaji" type="text" placeholder="etaji"/>
                <Input className="mt-2" id="tepi" type="text" placeholder="tepi"/>
            </ModalBody>
            <ModalFooter>
                <Button color="" onClick={openModal}>Cancel</Button>
                <Button color="success" onClick={openModal}>Save</Button>
            </ModalFooter>
        </Modal>
  </div>
  )
}

export default Shartnoma
