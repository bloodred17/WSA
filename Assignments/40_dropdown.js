//******************************************************************
// + Discription: Program to display dropdown items and delete items form it
// + Author     : Ankur S Dutta
// + Start Date : 8-July-2019
// + End Date : 8-July-2019
// + Institution: WSA
//******************************************************************

const body = document.body;
const drop_state = document.createElement('select');
drop_state.name = "states";
drop_state.id = "select_states";

const option_state_Gujarat = document.createElement('option');
option_state_Gujarat.value = "Gujarat";
option_state_Gujarat.className = "state";
option_state_Gujarat.innerHTML = "Gujarat";

const option_state_Assam = document.createElement('option');
option_state_Assam.value = "Assam";
option_state_Assam.innerHTML = "Assam";
option_state_Assam.className = "state";

const option_state_Odisha = document.createElement('option');
option_state_Odisha.value = "Odisha";
option_state_Odisha.innerHTML = "Odisha";
option_state_Odisha.className = "state";

const option_state_Karnataka = document.createElement('option');
option_state_Karnataka.value = "Karnataka";
option_state_Karnataka.innerHTML = "Karnataka";
option_state_Karnataka.className = "state";

drop_state.appendChild(option_state_Gujarat);
drop_state.appendChild(option_state_Assam);
drop_state.appendChild(option_state_Odisha);
drop_state.appendChild(option_state_Karnataka);
body.appendChild(drop_state);

const list_states = document.createElement('button');
list_states.innerHTML = "List";
list_states.onclick = () => {
    const list = document.getElementsByClassName('state');
    console.log("Number of states in list: "+ list.length);
};
body.appendChild(list_states);

const delete_state = document.createElement('button');
delete_state.innerHTML = "Delete State";
delete_state.onclick = () => {
    drop_state.remove(drop_state.selectedIndex);
}
// delete_state.onclick = () => {
//     const list = document.getElementsByClassName('state');
//     let arr = [...list];
//     console.log(arr);
//     arr.forEach((state, idx, arr) => {
//         state.remove(state.selectedIndex);
        // if(drop_state.value === state.value){
        //     state.style.display = "none";
            // state.selected = "none";
            // state.removeAttribute("selected");
            // if(arr[idx+1]!== undefined){
            //     arr[idx+1].selected = "selected";
            // }else if(arr[idx-1] !== undefined){
            //     arr[idx-1].selected = "selected";
            // }
    //     }
    // });
    // drop_state.value
// };
body.appendChild(delete_state);

document.addEventListener('change',() => {
    console.log(drop_state.value);
});

