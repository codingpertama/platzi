import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import { FcApproval } from "react-icons/fc";
import { LiaTimesSolid } from "react-icons/lia";

export default function ModalSuccessComp({ openModal, handleCloseModal }) {
  return (
    <Modal dismissible show={openModal} size="md" onClose={handleCloseModal} popup>
      <ModalHeader/>
        <ModalBody>
          <div className="text-center">
            <FcApproval className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Pembayaran berhasil!
            </h3>
          </div>
        </ModalBody>
      </Modal>
  );
}