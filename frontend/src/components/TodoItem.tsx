import { useState } from 'react';
import { Todo } from "../types";
import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import { store } from "../store";
import { ButtonTheme, ButtonSize, Button } from '@/shared/ui/Button';
import DeleteIcon from '@/shared/assets/icons/delete.svg'


interface TodoItemProps {
    todo: Todo;
    deleteTodoItem: (todo: Todo) => void;
    updateTodoItem: (value: string, id: string) => void;
}

function TodoItem({ todo, deleteTodoItem, updateTodoItem }: TodoItemProps): JSX.Element {
    
    const [editable, setEditable] = useState(false);
    
    const editClickHandler = () => {
        setEditable(true);
    }

    const changeHadler = (e: React.ChangeEvent<HTMLInputElement>) => {
        store.updateTodo(e.target.value, todo);
    }

    const saveClickHandler = (todo: Todo) => {
        store.updateTodoAsync(todo);
        setEditable(false);
    }

    return (
    <li key={todo.id} className="task">
        <input
            value={todo.title}
            readOnly={!editable}
            onChange={changeHadler}
            className="task__input"
        />
        {!editable  && 
            <button 
                className="btn-reset btn btn-edit"
                onClick={editClickHandler}
                >
                    Edit
                </button>}
        {editable && 
            <button 
                className="btn-reset btn btn-save"
                onClick={() => saveClickHandler(todo)}
            >
                Save
            </button>}
                <Button
                    theme={ButtonTheme.CLEAR}
                    size={ButtonSize.M}
                    onClick={() => deleteTodoItem(todo)}
                >
                    <Image
                        src={DeleteIcon}
                        height={24}
                        width={24}
                        alt="Delete item"
                    />
                </Button>
    </li>
   );
}

export default observer(TodoItem)