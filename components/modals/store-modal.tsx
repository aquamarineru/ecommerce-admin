"use client"
import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';


export const StoreModal = () => { 
    const storeModal = useStoreModal();

    return(
        <Modal
        title ="Create a store"
        description="Add a new store to manage your products and orders and categories"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
        >
            store form
        </Modal>
    
    )
}