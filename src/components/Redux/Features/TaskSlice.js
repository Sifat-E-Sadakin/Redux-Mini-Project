import { createSlice } from "@reduxjs/toolkit";


export let taskSlice = createSlice({
    name: 'task',
    initialState: {
        value : []
    },
    reducers: {
        addTask : (state, {payload}) => {
           
            if(state.value.length == 0){
                state.value.push({id: 1 ,status:'pending', ... payload});
            }
            else{
                let id = state.value.length + 1;
                let newId = id ++
                state.value.push({id : newId , status : 'pending', ... payload})
            }
        },
        updateTask: (state , {payload})=>{
         console.log(payload)
           let target = state.value.find(item => item.id == payload.id)
           target.status = payload.status
        }
    }
})

export let {addTask , updateTask} = taskSlice.actions

export default taskSlice.reducer