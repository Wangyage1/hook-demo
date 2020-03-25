import { Effect } from 'dva';
import { Reducer } from 'redux';

import { queryCurrent, query as queryUsers } from '@/services/user';

export interface CurrentUser {
    avatar?: string;
    name?: string;
    title?: string;
    group?: string;
    signature?: string;
    tags?: {
        key: string;
        label: string;
    }[];
    userid?: string;
    unreadCount?: number;
}

export interface UserInfo {
    name: string,
    userId: string
}

export interface UserModelState {
    currentUser?: CurrentUser;
    userInfo?: UserInfo;
}

export interface UserModelType {
    namespace: 'user';
    state: UserModelState;
    effects: {
        fetch: Effect;
        fetchCurrent: Effect;
    };
    reducers: {
        saveCurrentUser: Reducer<UserModelState>;
        changeNotifyCount: Reducer<UserModelState>;
    };
}

const UserModel: UserModelType = {
    namespace: 'user',

    state: {
        currentUser: {
            name: 'yage',
            userid: '001',
        },
        userInfo: {
            name: 'yage',
            userId: '001',
        }
    },

    effects: {
        *fetch(_, { call, put }) {
            const response = yield call(queryUsers);
            yield put({
                type: 'save',
                payload: response,
            });
        },
        *fetchCurrent(_, { call, put }) {
            const response = yield call(queryCurrent);
            yield put({
                type: 'saveCurrentUser',
                payload: response,
            });
        },
    },

    reducers: {
        saveCurrentUser(state, action) {
            return {
                ...state,
                currentUser: action.payload || {},
            };
        },
        changeNotifyCount(
            state = {
                currentUser: {},
            },
            action,
        ) {
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    notifyCount: action.payload.totalCount,
                    unreadCount: action.payload.unreadCount,
                },
            };
        },
    },
};

export default UserModel;
