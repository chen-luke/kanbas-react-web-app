import axios from "axios";
import { useState, useEffect } from "react";

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    type Todos = { id: number, title: string, description: string, due: string, completed: boolean }[]
    type Todo = { id: number, title: string, description: string, due: string, completed: boolean }

    const [todos, setTodos] = useState<Todos>([]);
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    useEffect(() => {
        fetchTodos();
    }, []);

    const removeTodo = async (todo: Todo) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };

    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };

    const fetchTodoById = async (id: number) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    }

    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };


    return (
        <div>
            <h3>Working with Arrays</h3>

            <h4>Retrieving Arrays</h4>
            <a className="btn btn-primary" href={API}>
                Get Todos
            </a>
            <br />
            <br />
            <h4>Retrieving an Item from an Array by ID</h4>
            <input value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: parseInt(e.target.value)
                })} />
            <a className="btn btn-primary" href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>
            <br />
            <br />
            <h3>Filtering Array Items</h3>
            <a className="btn btn-primary" href={`${API}?completed=true`}>
                Get Completed Todos
            </a>

            <br />
            <br />

            <h3>Creating new Items in an Array</h3>
            <a className="btn btn-primary" href={`${API}/create`}>
                Create Todo
            </a>

            <br />
            <br />

            <h3>Deleting from an Array</h3>
            <a className="btn btn-primary" href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </a>

            <br />
            <br />
            <h3>Working With Arrays</h3>
            <input type="number" value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: parseInt(e.target.value)
                })} />
            <br />
            <input type="text" value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })} />
            <br />
            <h3>Updating an Item's Title in an Array</h3>
            <a className="btn btn-primary" href={`${API}/${todo.id}/title/${todo.title}`} >
                Update Title to {todo.title}
            </a>
            <br />
            <br />
            <h3>Change the Completed Property of a TODO</h3>
            <input type="number" value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: parseInt(e.target.value)
                })} />
            <br />
            Complete Todo <input type="checkbox" name="" id="" onChange={(e) => setTodo({
                ...todo, completed: e.target.checked
            })
            } />
            <br />
            <br />
            <a className="btn btn-primary" href={`${API}/${todo.id}/completed/${todo.completed}`} >
                Update {todo.title} Completion
            </a>
            <br />
            <br />
            <h3>Change the Description Property of a TODO</h3>
            <input type="number" value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: parseInt(e.target.value)
                })} />
            <br />
            <textarea value={todo.description} onChange={(e) => setTodo({
                ...todo, description: e.target.value
            })} />
            <br />
            <br />
            <a className="btn btn-primary" href={`${API}/${todo.id}/description/${todo.description}`} >
                Update {todo.title} Description
            </a>
            <br />
            <br />

            <ul className="list-group w-50">
                <button className="btn btn-primary mb-2" onClick={createTodo} >
                    Create Todo
                </button>
                <button className="btn btn-success mb-2" onClick={updateTitle} >
                    Update Title
                </button>
                {todos.map((todo) => (
                    <li className="list-group-item" key={todo.id}>
                        {todo.title}
                        <button className="btn btn-danger ms-4 " onClick={() => removeTodo(todo)} >
                            Remove
                        </button>
                        <button className="btn btn-warning ms-2 " onClick={() => fetchTodoById(todo.id)} >
                            Edit
                        </button>

                    </li>
                ))}
            </ul>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}
export default WorkingWithArrays;