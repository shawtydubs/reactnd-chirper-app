import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formatTweet} from '../utils/helpers';

class Tweet extends Component {
    render() {
        console.log(this.props);

        if (this.props.tweet === null) {
            return (
                <p>This tweet doesn't exist</p>
            )
        }

        console.log(this.props);

        return (
            <div className="tweet"></div>
        );
    };
};

function mapStateToProps ({authedUser, users, tweets}, {id}) {
    const tweet = tweets[id];
    const parentTweet = tweet ? tweet[tweet.replyingTo] : null;

    return {
        authedUser,
        tweet: tweet
            ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
            : null
    }
}

export default connect(mapStateToProps)(Tweet);
