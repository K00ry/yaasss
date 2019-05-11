

const initialState ={
    musicCards :[],

};

const reducer = (state = initialState, action)=>{
    const newState = {...state};
    if(action.type === "INIT"){
            newState.musicCards = action.value;
    }
    return newState;
};


export default reducer;