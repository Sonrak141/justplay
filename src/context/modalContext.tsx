import  { createContext, useContext, useState, ReactNode, ReactElement } from 'react';

interface ModalContextType {
    isOpen: boolean;
    updateIsOpen: boolean;
    openUpdate:() => void;
    closeUpdate:() => void;
    openModal: () => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
    children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps): ReactElement {
    const [isOpen, setIsOpen] = useState(false);
    const [updateIsOpen, setUpdateIsOpen] = useState(false)

    const openUpdate = () => {
        setUpdateIsOpen(true)
    }
    const closeUpdate = () => {
        setUpdateIsOpen(false)
    }
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal, updateIsOpen, openUpdate, closeUpdate }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}