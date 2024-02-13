import {useReducer} from 'react';
import {UserInfoTypes, userInfoReducer} from '../../reducers/user-info';
import {UserInfoData} from './user-info.data';

export const UserInfoModal = () => {
  const [userInfo, dispatchUserInfoActions]: [IUserInfoData, any] = useReducer(
    userInfoReducer,
    UserInfoData,
  );

  const initializeUserInfo = (userInfoData: IUserInfoData) => {
    dispatchUserInfoActions({
      type: UserInfoTypes.updateUserInfo,
      data: {...userInfoData},
    });
  };

  return {
    ...userInfo,
    initializeUserInfo,
  };
};

export type IUserInfoModal = typeof UserInfoModal;
