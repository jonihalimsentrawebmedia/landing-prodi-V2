import { ActionProps, InitialStateProps } from './types'

export const initialState: InitialStateProps = {
  profile: null,
}

const Reducer = (
  state: InitialStateProps = initialState,
  action: ActionProps
): InitialStateProps => {
  switch (action.type) {
    case 'SET_PROFILE':
      return {
        ...state,
        profile: action.payload,
      }
    default:
      return state
  }
}

export default Reducer
