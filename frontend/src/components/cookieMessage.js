import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import 'flowbite'

export function CookieMessage(){

    const [openModal, setOpenModal] = useState(true);

    return (
        <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Attention</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 font-Lexend">
            We use basic cookies to enhance your browsing experience and store session information on our website. By continuing to use this site, you consent to the use of these cookies.
            </p>
            <p className="text-base leading-relaxed text-gray-500 font-Lexend">
            Please note that we never store personal data with the cookies we use for session storage. Your privacy and data security are our top priorities.
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
    )
}