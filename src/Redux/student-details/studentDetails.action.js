const isSelected=(id)=>{
    return{
        type:'SELECTED',
        payload:id
    }
}
export const isNotSelected=(id)=>{
    return{
        type:'NOT_SELECTED',
        payload:id
    }
}
export const setClass=(id,className)=>{
    return{
        type:'SET_CLASS',
        payload:{id:id,class:className}
    }
}


export default isSelected;
