import React from 'react';
import { Modal } from 'components/Modal';
import {
  TitleCard,
  StyledForm,
  StyledField,
  LabelTitle,
  Labels,
  LabelRadiobutton,
  DedlineDataField,
  DedlineTitle,
  ButtonCard,
  Textarea,
  ErrorText,
} from './CardModal.styled';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

const CommentSchema = Yup.object().shape({
  title: Yup.string().required('title is required'),
  description: Yup.string().required('Description is required'),
});

const CardModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  if (!isOpen) {
    return null;
  }
  const handleSubmit = async (value, { setSubmitting }) => {
    setSubmitting(true);

    alert('Submit');

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <TitleCard>Add card</TitleCard>
      <Formik
        initialValues={{
          title: '',
          description: '',
        }}
        validationSchema={CommentSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <StyledField name="title" type="text" placeholder="Title" />
            <ErrorText name="title" component="div" />

            <Textarea
              name="description"
              as="textarea"
              placeholder="Description"
            />
            <ErrorText name="description" component="div" />

            <LabelTitle>Label color</LabelTitle>
            <Labels>
              <LabelRadiobutton
                type="radio"
                name="label"
                value="Without priority"
              />
              <LabelRadiobutton type="radio" name="label" value="Low" />
              <LabelRadiobutton type="radio" name="label" value="Medium" />
              <LabelRadiobutton type="radio" name="label" value="High" />
            </Labels>

            <DedlineTitle>Deadline</DedlineTitle>
            <DedlineDataField type="text" name="date" value="30.06.2023" />

            <ButtonCard type="submit" disabled={isSubmitting}>
              Add
            </ButtonCard>
          </StyledForm>
        )}
      </Formik>
    </Modal>
  );
};

export default CardModal;