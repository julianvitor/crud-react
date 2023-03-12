import { User } from '../types/User';
import { Action, ActionType } from '../types/Action';

export interface State {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  users: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case ActionType.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionType.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case ActionType.UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case ActionType.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;