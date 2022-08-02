import { useState } from 'react';

export default function useModal(initialMode = false) {
  const [isModalOpen, setIsModalOpen] = useState(initialMode);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  return { isModalOpen, toggleModal, closeModal, openModal };
}
