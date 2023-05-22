const { GETUSERS, ADDUSERS, DELETEUSERS, EDITUSERS } = require("./actionType");

const init ={
    users:null,
    loading:true
}

const reducer = (state = init ,{type,payload}) => {
    switch (type) {
        case GETUSERS:
            return {
                ...state,loading:false,users:payload,
            }
        case ADDUSERS:
            return{
                ...state,users:[...state.users,payload]
            }   
        case DELETEUSERS:
            return{
                ...state,users:state.users.filter(el => el.id!==payload)
            }  
        case EDITUSERS:
            return{
                ...state,users:state.users.map(el=>el.id===payload._id ? payload:el)
            }    
    
        default:
            return state
    }
}
export default reducer;