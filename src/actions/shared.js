import {getInitialData} from '../utils/api';
import {receiveTweets} from './tweets';
import {receiveUsers} from './users';
import {setAuthedUser} from './authedUser';

const AUTHED_ID = 'shawtydubs';

export function handleInitialData () {
    return (dispath) => {
        return getInitialData()
            .then({users, tweets} => {
                dispatch(receiveTweets(tweets));
                dispatch(receiveUsers(users));
                dipatch(setAuthedUser(AUTHED_ID));
            })
    };
};
