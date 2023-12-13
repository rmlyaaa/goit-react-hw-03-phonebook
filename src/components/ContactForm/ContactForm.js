import { Formik } from 'formik';
import { Button, Label, StyledField, StyledForm } from './ContactForm.styled';

export const ContactForm = ({ onAdd }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <Label>
            Name
            <StyledField name="name" type="text" required />
          </Label>

          <Label>
            Number
            <StyledField name="number" type="tel" required />
          </Label>
          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    </>
  );
};
