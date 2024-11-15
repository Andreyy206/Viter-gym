import React from 'react'
import ModalWrapper from './ModalWrapper';
import { CircleAlert, CircleHelp, X } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { queryData } from '@/components/helpers/queryData';
import { StoreContext } from '@/components/store/storeContext';
import { setIsDelete } from '@/components/store/storeAction';

const ModalDelete = ({ mysqlApiDelete, queryKey, setIsToast}) => {
  const { dispatch } = React.useContext(StoreContext);

   const queryClient = useQueryClient();
   const mutation = useMutation({
     mutationFn: (values) => queryData(mysqlApiDelete, "delete", values),
     onSuccess: (data) => {
       queryClient.invalidateQueries({ queryKey: [queryKey] });
       
       if (data.success) {
         dispatch(setIsDelete(false));
         dispatch(setSuccess(true));
       } else {
         dispatch(setError(true));
         dispatch(setMessage(data.error));
       }
     },
   });

    const handleYes = async () => {
      mutation.mutate({
      });
    };

    const handleClose = () => dispatch(setIsDelete(false))
  return (
    <ModalWrapper>
      <div className='modal-main bg-primary absolute z-50 max-w-[350px] w-full rounded-md'>
        <div className='modal-header p-2 border-b border-line flex justify-between items-center'>
          <h3 className='mb-0 leading-none text-alert'>Delete</h3>
          <button onClick={handleClose}><X /></button>
        </div>
        <div className='modal-body p-2 px-4 text-center'>
          <div className='size-[40px] mt-2 bg-alert bg-opacity-40 grid place-content-center rounded-full mx-auto'>
            <CircleHelp className='stroke-alert' />
          </div>
          <p className='mt-3 mb-5 text-balance '>
            You are about to remove this record. Are you sure you want to
            continue?
          </p>
        </div>
        <div className='modal-footer flex py-2 border-t border-line justify-end gap-3 px-4'>
          <button className='btn btn-alert 'onClick={handleYes}strokeWidth={1}size={30}> Delete</button>
          <button className='btn btn-cancel' onClick={handleClose}>Cancel</button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default ModalDelete
