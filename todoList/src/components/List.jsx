import TodoItem from "../components/TodoItem";

const List = () => {
    return (
        <div className="List">
            <h4>List</h4>
            <input placeholder="새로운 .." />

            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    )
};

export default List;