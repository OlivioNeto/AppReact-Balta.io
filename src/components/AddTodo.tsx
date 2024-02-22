import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TodoContextType } from '../contexts/TodoContextType';

const schema = yup.object().shape({
    title: yup.string().required('Tarefa inválida'),
});

interface AddTodoForm {
    title: string;
}

const AddTodo = () => {
    const { addTodo } = useContext<TodoContextType>(TodoContext);
    const { register, handleSubmit, formState: { errors } } = useForm<AddTodoForm>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<AddTodoForm> = (data, e) => {
        addTodo(data.title);
        e?.target.reset();
        window.location.href = '/';
    };

    const onError: SubmitErrorHandler<AddTodoForm> = (errors, e) => {
        console.error(errors);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <h4>Nova tarefa</h4>
            <div className="uk-margin uk-width-1-1">
                <input type="text" name="title" id="title" placeholder="Nova tarefa..." className="uk-input" {...register} />

                <span><small><strong className="uk-text-danger">{errors?.title?.message}</strong></small></span>
            </div>
            <div className="uk-width-1-1">
                <button type="submit" className="uk-button uk-button-primary">Salvar</button>
            </div>
        </form>
    );
}

export default AddTodo;
