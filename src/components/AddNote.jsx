import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAddNoteMutation } from '../store/api/NoteSlice';
import { useNavigate } from 'react-router-dom';



const AddNote = () => {

 const navigate = useNavigate()

  const [addNote ] = useAddNoteMutation();

  const initialValues = {
    title: '',
    content: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    content: Yup.string().required('Content is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Send the data to the server (localhost:9000/create_note)
    console.log(values);
    addNote({
      title: values.title,
      content: values.content,
    }).unwrap().then(() => {
      navigate('/')
    })
   
    

    // Reset the form after submission
    resetForm();
  };

  return (
    <div className="bg-gray-400 p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2 mt-7">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-5">
            <Field
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              className="border border-gray-300 shadow p-3 w-full rounded mb-"
            />
            <ErrorMessage name="title" component="div" className="text-red-500" />
          </div>

          <div className="mb-5">
            <Field
              as="textarea"
              name="content"
              placeholder="Body"
              className="border border-gray-300 shadow p-3 w-full rounded mb-"
            />
            <ErrorMessage name="content" component="div" className="text-red-500" />
          </div>

          <button
            type="submit"
            className="block w-full bg-green-400 text-black font-bold p-4 rounded-lg hover:bg-yellow-500"
          >
            Add Note
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNote;
