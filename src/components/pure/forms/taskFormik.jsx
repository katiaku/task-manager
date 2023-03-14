import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const TaskFormik = () => {

    let task = new Task();

    const initialValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL
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

    const submit = (values) => {
        alert('Register a task')
    }

    return (
        <div>
            <h4>Task Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema = {taskSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
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

                            <button type="submit">Register Task</button>
                            {isSubmitting ? (<p>Uploading your task...</p>) : null}

                        </Form>
                    )
            }
            </Formik>
        </div>
    );
}

export default TaskFormik;
