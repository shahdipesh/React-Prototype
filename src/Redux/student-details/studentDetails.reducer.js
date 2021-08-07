const initialState = {
    studentDetails: [
        { id: 1, name: 'Dipesh', isSelected: false , currentClass:'none'},
        { id: 2, name: 'Kismat',isSelected:false, currentClass: 'none' },
        { id: 3, name: 'Pramesh', isSelected: false , currentClass:'none'},
        { id: 4, name: 'Sabhyam',isSelected:false, currentClass: 'none' },
        { id: 5, name: 'Praveen', isSelected: false , currentClass:'none'},
        { id: 6, name: 'Gandu',isSelected:false, currentClass: 'none' }
    ]
}

var studentDetailsReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case `SELECTED`:
            const newArray = [...state.studentDetails];
            newArray.forEach(student => {
                if (student.id == payload) {
                    student.isSelected = true
                }
            })
            return {
                ...state,
                studentDetails: newArray
            }

        case `NOT_SELECTED`:
            const newArray1 = [...state.studentDetails];
            newArray1.forEach(student => {
                if (student.id == payload) {
                    student.isSelected = false
                }
            })
            return {
                ...state,
                studentDetails: newArray1
            }

            case `SET_CLASS`:
                const newArray2 = [...state.studentDetails];
                newArray2.forEach(student => {
                    if (student.id == payload.id) {
                        student.currentClass = payload.class;
                    }
                })
                return {
                    ...state,
                    studentDetails: newArray2
                }
        default:
            return state
    }
}

export default studentDetailsReducer;