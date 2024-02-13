import {UserInfoTypes} from './user-info.types';

export const userInfoReducer = (
  state: IUserInfoData,
  action: IActionType<UserInfoTypes>,
) => {
  if (action.type === UserInfoTypes.updateUserInfo) {
    return {
      ...state,
      username: action.data?.username || '',
      userId: action.data?.userId || '',
    };
  }
  throw Error('Unknown action.');
};
