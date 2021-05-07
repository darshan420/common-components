import React from "react";
import { Modal, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { ConfirmationDeleteModal } from "../src/index";

export default {
  title: "Modal",
  component: Modal,
};

export function DeleteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}  bg="primaryTeal.400" >
        Delete Note
      </Button>
      <ConfirmationDeleteModal
        width={[400, 704]}
        height={246}
        padding={["10px", "32px"]}
        title="Are you sure you would like to delete this note?"
        isModalOpen={isOpen}
        closeModal={onClose}
      >
        All the peices fit together like a puzzle. If one peice is broken, the
        others will not fit together properly. Remember to keep track
        ofeverything and keep ahead of the game so as not to miss the
        importantbits. Speaking to colleagues regarding these issues is a good
        idea.
      </ConfirmationDeleteModal>
    </>
  );
}