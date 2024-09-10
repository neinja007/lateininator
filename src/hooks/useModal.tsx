import { X } from 'lucide-react';
import { useState, useCallback } from 'react';

type ModalProps = {
  heading: string;
  content: React.ReactNode;
};

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState<ModalProps | null>(null);

  const openModal = useCallback(({ heading, content }: ModalProps) => {
    setModalProps({ heading, content });
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalProps(null);
  }, []);

  const Modal = useCallback(() => {
    if (!isOpen || !modalProps) return null;

    return (
      <>
        <div className='fixed inset-0 z-50 bg-black opacity-50' onClick={closeModal} />
        <div className='fixed inset-0 z-50 m-auto h-fit w-full max-w-[500px] rounded-xl border bg-inherit bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-black'>
          <button className='float-end' onClick={closeModal}>
            <X className='h-7 w-7' />
          </button>
          <h2 className='mb-4 text-xl font-bold'>{modalProps.heading}</h2>
          <div>{modalProps.content}</div>
        </div>
      </>
    );
  }, [isOpen, modalProps, closeModal]);

  return { Modal, open: openModal, close: closeModal };
};
