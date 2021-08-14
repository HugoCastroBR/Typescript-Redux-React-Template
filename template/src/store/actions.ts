import { PageActions } from 'store/index';

export const SetLoading = (value: boolean) => {
  return PageActions.SET_LOADING(value)
}