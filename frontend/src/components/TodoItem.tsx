import { useState } from 'react';
import { Todo } from "../types";
import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import { store } from "../store";
import { ButtonTheme, ButtonSize, Button } from '@/shared/ui/Button';
import DeleteIcon from '@/shared/assets/icons/delete.svg'
import EditIcon from '@/shared/assets/icons/edit.svg'
import DoneIcon from '@/shared/assets/icons/done.svg'


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
            <Button
                theme={ButtonTheme.CLEAR}
                size={ButtonSize.M}
                onClick={editClickHandler}
            >
                <Image
                    src={EditIcon}
                    height={24}
                    width={24}
                    alt="Edit item"
                />
            </Button>
        }
        {editable && 
            <Button
                theme={ButtonTheme.CLEAR}
                size={ButtonSize.M}
                onClick={() => saveClickHandler(todo)}
            >
                <Image
                    src={DoneIcon}
                    height={24}
                    width={24}
                    alt="Save item"
            />
        </Button>
        }
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