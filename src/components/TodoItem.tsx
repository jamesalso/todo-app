interface TodoItemProps {
    task: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ task }) => {
    return <li className="text-lg text-gray-700">{task}</li>;
};

export default TodoItem;