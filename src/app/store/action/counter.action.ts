interface Action<T extends string, U> {
  type: T,
  payload: U
}

export enum CounterActionType {
  'INCREMENT' = '[CounterActionType] increment',
  'DECREMENT' = '[CounterActionType] decrement',
}

export type CounterActions =
  Action<CounterActionType.INCREMENT, number>
  | Action<CounterActionType.DECREMENT, number>


class CounterActionCreator {

  increase(payload: number = 1): CounterActions {
    return { type: CounterActionType.INCREMENT, payload };
  }

  decrease(payload: number = 1): CounterActions {
    return { type: CounterActionType.DECREMENT, payload };
  }
}


export const counterActions = new CounterActionCreator();

