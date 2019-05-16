import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { fetchFriends } from './../actions/actions'

class FriendList extends Component {
    componentDidMount() {
        this.props.fetchFriends();
    }
    
    render() {
        return this.props.fetchingFriends ? 
            (
                <div><h2>We're getting your friends! (Since you have so many!)</h2></div>
            )
            :
            (
                <div>
                    <h2>LOOK AT ALL MY FRIENDS!</h2>
                    {this.props.friends.map(friend => {
                        return (
                            <div key={friend.id}>
                                <h3>{friend.name} ({friend.age})</h3>
                                <h4>{friend.email}</h4>
                            </div>
                        )
                    })}
                </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        fetchingFriends: state.getFriends.fetchingFriends,
        friends: state.getFriends.friends,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchFriends,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendList);