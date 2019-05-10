import { CounterActions, CounterActionType } from '@app/store/action/counter.action';

export function counterReducer (state = {value: Number(0)}, action: CounterActions){
  switch(action.type) {
    case CounterActionType.INCREMENT:
        return  {...state, value: state.value + action.payload};
    case CounterActionType.DECREMENT:
      return  {...state, value: state.value - action.payload};
    default:
      return state;
  }
}
