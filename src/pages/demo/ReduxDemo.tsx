
import React from 'react';
import { useSelector } from 'react-redux';

const ReduxDemo = () => {

    const user = useSelector(state => state.user.userInfo);
    console.log('user', user);

    return (<div>
        <div>userName:  {user.name}</div>
        <div>userId: {user.userId}</div>
    </div>)
};

export default ReduxDemo;