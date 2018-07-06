import {combinedReducers} from 'redux';
import {authedUser} from './authedUser';
import {tweets} from './tweets';
import {users} from './users';

export default combinedReducers({
    authedUser,
    tweets,
    users,
});
