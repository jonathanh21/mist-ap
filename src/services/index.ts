import { BehaviorSubject, Observable } from 'rxjs';
/**
 * Variable que nos permite almacenar cualquier tipo de valor en un Subject de RxJs
 */
const $state = new BehaviorSubject<{
  [key: string]: any;
}>({});

export function setState(state: { [key: string]: any }): void {
  $state.next(state);
}

export function getState(): {
  [key: string]: any;
} {
  return $state.value;
}

export function stateObservable(): Observable<{
  [key: string]: any;
}> {
  return $state.asObservable();
}
