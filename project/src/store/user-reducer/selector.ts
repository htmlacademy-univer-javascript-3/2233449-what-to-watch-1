import {AuthorizationStatus, NameSpace} from '../../constants';
import {State} from '../../types/store';
import {UserData} from '../../types/user-data-type';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUser = (state: State): UserData|null => state[NameSpace.User].user;
