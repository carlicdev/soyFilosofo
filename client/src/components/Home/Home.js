import React, { useState } from 'react';
import Cover from './Cover';
import Section from './Section';
import Modal from '../Modal/Modal';

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div>
            <Modal handleModal={modalOpen} />
            <Cover handleModal={() => setModalOpen(!modalOpen)} />
            <Section />
        </div>
    )
}

export default Home;
