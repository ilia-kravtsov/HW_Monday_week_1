import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                let copyStateUsers = [...state];
                copyStateUsers.sort((a, b) => a.name < b.name ? -1 : 1 )
                return copyStateUsers // need to fix
            } else {
                let copyStateUsers = [...state];
                copyStateUsers.sort((a, b) => a.name > b.name ? -1 : 1)
                return copyStateUsers // need to fix
            }
        }
        case 'check': {
            let result = state.filter(user => user.age > 18);
            return result // need to fix
        }
        default:
            return state
    }
}
