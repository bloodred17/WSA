let todos = renderTodos();
const searchText = document.getElementById('input_todo-search');
if(searchText.value === ""){
    renderTable(todos);
}else if(searchText.value === "*0000#"){
    const incompleteTodos = todos.filter((todo) => {
        if(todo.status === false){
            return true;
        }
    });
    renderTable(incompleteTodos);
    searchText.value = "";
}else if(searchText.value === "*0101#"){
    const incompleteTodos = todos.filter((todo) => {
        if(todo.status === true){
            return true;
        }
    });
    renderTable(incompleteTodos);
    searchText.value = "";

}else{
    const filteredTodos = todos.filter((todo) => {
        // console.log(searchText.value);
        searchRegex = new RegExp(searchText.value);
        if(searchRegex.exec(todo.title)){
            return true;
        }
    });
    renderTable(filteredTodos);
}