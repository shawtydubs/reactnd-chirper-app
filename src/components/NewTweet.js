import React, {Component} from 'react';

const TWEET_LENGTH = 280;

class NewTweet extends Component {
    state = {
        text: '',
    };

    handleChange = (event) => {
        const text = event.target.value;

        this.setState({text});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const {text} = this.state;

        // TODO: add tweet to store

        console.log('New tweet: ', text);

        this.setState({text: ''});
    };

    render() {
        const {text} = this.state;

        {/* TODO: redirect user to home after submitting */}

        const tweetLeft = TWEET_LENGTH - text.length;

        return (
            <div>
                <h3 className="center">Compose New Tweet</h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="What's happening?"
                        value={text}
                        onChange={this.handleChange}
                        className="textarea"
                        maxLength={TWEET_LENGTH}
                    />
                    {tweetLeft <= 100 && (
                        <div className="tweet-length">{tweetLeft}</div>
                    )}
                    <button
                        className="btn"
                        type="submit"
                        disabled={text === ''}
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    };
};

export default NewTweet;
