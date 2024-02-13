import {useReducer} from 'react';
import {
  HandHistoryTypes,
  handHistoryReducer,
} from '../../reducers/hand-history';
import {HandHistoryData} from './list.data';

export const ListModal = () => {
  const [handHistoryState, dispatchHistoryActions] = useReducer(
    handHistoryReducer,
    HandHistoryData,
  );

  const updateLoaderVisibility = (value: boolean) => {
    dispatchHistoryActions({
      type: HandHistoryTypes.updateFetchingStatus,
      data: value,
    });
  };

  const updateListData = (list: IHandHistoryData['list']) => {
    dispatchHistoryActions({
      type: HandHistoryTypes.updateListData,
      data: list || [],
    });
  };

  return {
    ...handHistoryState,
    updateLoaderVisibility,
    updateListData,
  };
};

export type IListModal = typeof ListModal;
