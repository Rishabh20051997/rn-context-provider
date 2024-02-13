import {HandHistoryData} from '../../slice/list-modal/list.data';
import {HandHistoryTypes} from './hand-history.types';

type IHandHistoryState = typeof HandHistoryData;

// React Reducer to update State value for Hand History Data
export const handHistoryReducer = (
  state: IHandHistoryState,
  action: IActionType<HandHistoryTypes>,
) => {
  switch (action?.type) {
    case HandHistoryTypes.updateListData:
      return {
        ...state,
        isLoading: false,
        list: [...state.list, ...action.data] || [],
      } as IHandHistoryState;

    case HandHistoryTypes.updateFetchingStatus:
      return {
        ...state,
        isLoading: action.data || false,
      } as IHandHistoryState;

    default:
      return state;
  }
};
