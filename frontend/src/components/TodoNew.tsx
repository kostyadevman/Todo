import { observer } from 'mobx-react-lite';
import { store } from "../store";
import { useState } from 'react';
import {default as UUID} from "node-uuid";
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';


function TodoNew(): JSX.Element {

    const [title, setTitle] = useState('')


    const addClickHandler = () => {
        store.addTodoAsync(title)
        setTitle('');
    }

    return (

            <div className='todo__form'>
                <label className="todo__field">
                    <input
                        className="todo__input" 
                        type="text" 
                        name="title" 
                        placeholder="Add new todo here..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <Button
                    theme={ButtonTheme.SECONDARY}
                    size={ButtonSize.M}
                    fullWidth
                    onClick={addClickHandler}
                >
                    Add todo
                </Button>
            </div>

    );
}

export default observer(TodoNew)
