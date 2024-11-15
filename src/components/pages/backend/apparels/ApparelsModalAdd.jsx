import { ImagePlusIcon, Type, X } from "lucide-react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { StoreContext } from "@/components/store/storeContext";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/storeAction";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "Yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "@/components/helpers/queryData";
import { InputPhotoUpload, InputText } from "@/components/helpers/formInputs";
import SpinnerButton from "../partials/spinners/SpinnerButton";
import useUploadPhoto from "@/components/custom-hook/useUploadPhoto";
import { imgPath } from "@/components/helpers/functions-general";

const ApparelsModalAdd = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsAdd(false));
  const { uploadPhoto, handleChangePhoto, photo } =
    useUploadPhoto("/v1/upload-photo");

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/apparels/${itemEdit.apparels_aid}` : `/v1/apparels`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch

      console.log(data)
      queryClient.invalidateQueries({
        queryKey: ["apparels"],
      });

      // show error box
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Record ${itemEdit ? "Updated" : "Added"}`));
      } else {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const initVal = {
    apparels_title: itemEdit ? itemEdit.apparels_title : "",
    apparels_details: itemEdit ? itemEdit.apparels_details : "",
    apparels_price: itemEdit ? itemEdit.apparels_price : "",
    apparels_description: itemEdit ? itemEdit.apparels_description : "",
    apparels_size: itemEdit ? itemEdit.apparels_size : "",
    apparels_title_old: itemEdit ? itemEdit.apparels_title : "",
  };

  const yupSchema = Yup.object({
    apparels_title: Yup.string().required("Required"),
    apparels_details: Yup.string().required("Required"),
    apparels_price: Yup.string().required("Required"),
    apparels_description: Yup.string().required("Required"),
    apparels_size: Yup.string().required("Required"),
  });

  return (
    <ModalWrapper>
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values) => {
          // uploadPhoto();
          mutation.mutate({
            ...values,
            apparels_photo:
              (itemEdit?.apparels_photo === "" && photo) ||
              (!photo && "") ||
              (photo === undefined && "") ||
              (photo && itemEdit?.apparels_photo !== photo?.name)
                ? photo?.name || ""
                : itemEdit?.apparels_photo || "",
          });
        }}
      >
        {(props) => {
          return (
            <Form>
              <div className='modal-main absolute top-0 right-0 h-[100dvh] w-[320px] bg-primary border-l border-line grid grid-rows-[auto,_1fr,_auto] animate-slideLeft'>
                <div className='modal-header p-3 px-4 pb-0 flex justify-between items-center self-start'>
                  <h5 className='mb-0'>{itemEdit ? "Edit" : "Add"} Apparels</h5>
                  <button onClick={handleClose}>
                    <X />
                  </button>
                </div>

                <div className='modal-body  p-3 px-4 '>
                  <div className='input-wrap relative  group input-photo-wrap h-[150px] '>
                    {itemEdit === null && photo === null ? (
                      <div className='w-full  rounded-md flex justify-center items-center flex-col h-full'>
                        <ImagePlusIcon
                          size={50}
                          strokeWidth={1}
                          className='opacity-20 group-hover:opacity-50 transition-opacity'
                        />
                        <small className='opacity-20 group-hover:opacity-50 transition-opacity'>
                          Upload Photo
                        </small>
                      </div>
                    ) : (
                      <img
                        src={
                          photo
                            ? URL.createObjectURL(photo) // preview
                            : imgPath + "/" + itemEdit?.movies_image // check db
                        }
                        alt='employee photo'
                        className={`group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto ${
                          mutation.isPending
                            ? "opacity-40 pointer-events-none"
                            : ""
                        }`}
                      />
                    )}

                    <InputPhotoUpload
                      name='photo'
                      type='file'
                      id='photo'
                      accept='image/*'
                      title='Upload photo'
                      onChange={(e) => handleChangePhoto(e)}
                      onDrop={(e) => handleChangePhoto(e)}
                      className={`opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full ${
                        mutation.isPending ? "pointer-events-none" : ""
                      }`}
                    />
                  </div>

                  <div className='input-wrap'>
                    <InputText
                      label='Apparels'
                      type='Text'
                      name='apparels_title'
                      disabled={mutation.isPending}
                    />
                  </div>

                  <div className='input-wrap'>
                    <InputText
                      label='Details'
                      type='text'
                      name='apparels_details'
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className='input-wrap'>
                    <InputText
                      label='Price'
                      type='text'
                      name='apparels_price'
                      disabled={mutation.isPending}
                    />
                  </div>

                  <div className='input-wrap'>
                    <InputText
                      label='Size'
                      type='text'
                      name='apparels_size'
                      disabled={mutation.isPending}
                    />
                  </div>

                  <div className='input-wrap relative'>
                    <InputText
                      label='Description'
                      type='text'
                      name='apparels_description'
                      disabled={mutation.isPending}
                    />
                  </div>
                </div>
                <div className='modal-action flex justify-end gap-3 items-center p-3 px-4 pb-5 self-start'>
                  <button
                    className='btn btn-accent min-w-[90px] flex justify-center'
                    type='submit'
                  >
                    {mutation.isPending ? <SpinnerButton /> : "Save"}
                  </button>
                  <button
                    className='btn btn-cancel min-w-[90px] flex justify-center'
                    type='reset'
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </ModalWrapper>
  );
};

export default ApparelsModalAdd;
