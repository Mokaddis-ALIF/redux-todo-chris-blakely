import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTodosAsync } from '../store/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch]);

	return (
		<ul className="list-group">
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
