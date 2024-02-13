type IListModal = import('../stores/slice').IListModal;
type IUserInfoModal = import('../stores/slice').IUserInfoModal;

type IListStateModal = ReturnType<IListModal>;
type IUserInfoStateModal = ReturnType<IUserInfoModal>;

interface IAppContext {
  listModal: IListStateModal;
  userInfoModal: IUserInfoStateModal;
}

interface IUserInfoData {
  username: string;
  userId: string;
}

interface IHandHistoryData {
  list: string[];
  isLoading: boolean;
}

interface IActionType<T> {
  type: T;
  data: any;
}
