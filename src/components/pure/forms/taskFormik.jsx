import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';
import useList from '../../../hooks/useList';


const TaskFormik = () => {

    const defaultTask = {
        name: 'Formik',
        description: 'Formulario con Formik',
        level: LEVELS.URGENT,
        done: false,
    };
    
    const initialValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL,
        done: false
    }

    const taskSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(4, 'Name is too short')
                .max(12, 'Name is too long')
                .required('Name is required'),
            description: Yup.string()
                .min(12, 'Description is too short')
                .max(40, 'Description is too long')
                .required('Description is required'),
            level: Yup.string()
                .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must select a level')
                .required('Level is required')
        }
    )

    const tasks = useList([defaultTask]);

    return (
        <div>
            <h4>Task List Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema = {taskSchema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        tasks.push(values);
                        actions.resetForm({});
                        actions.setSubmitting(false);
                    }, 500);
                }}
            >
            {({ values, 
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="name">Task Name</label>
                            <Field id="name" type="text" name="name" placeholder="Your task name" />
                            {
                                errors.name && touched.name && 
                                (
                                    <ErrorMessage name="name" component="div"></ErrorMessage>
                                )
                            }

                            <label htmlFor="description">Task Description</label>
                            <Field id="description" type="text" name="description" placeholder="Task description" />
                            {/* Email Errors */}
                            {
                                errors.description && touched.description && 
                                (
                                    <ErrorMessage name="email" component="div"></ErrorMessage>
                                )
                            }

                            <label htmlFor="level">Task Level</label>
                            <Field as="select" name="level">
                                <option value={LEVELS.NORMAL}>Normal</option>
                                <option value={LEVELS.URGENT}>Urgent</option>
                                <option value={LEVELS.BLOCKING}>Blocking</option>
                            </Field>

                            <button type="submit">Submit</button>
                        </Form>
                    )
            }
            </Formik>
            {tasks.isEmpty() ? (
                <p>Task List is Empty</p>
            ) : (
                tasks.value.map((task, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" onClick={() => tasks.remove(index)} checked={false} />
                        <p style={{ fontWeight: 'bold', marginRight: '5px' }}>{task.name}</p>
                        <p>{task.description}</p>
                    </li>
                ))
            )}
        </div>
    );
}

export default TaskFormik;
