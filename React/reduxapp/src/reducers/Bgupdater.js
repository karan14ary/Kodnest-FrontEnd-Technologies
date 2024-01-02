const initialState='white'
const updateColor=(state=initialState,action)=>{
    switch(action.type){
        case"GREEN":return 'green'
        case"YELLOW":return 'yellow'
        case"RED":return 'red'
        default: return state
    }
}
export default updateColor