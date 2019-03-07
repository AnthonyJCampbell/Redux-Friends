import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { fetchFriends, postFriends } from './../actions/actions'

class FriendList extends Component {
    componentDidMount() {
        this.props.fetchFriends();
    }
    
    render() {
        console.log(this.props.friends)
        return (
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
        );
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
        postFriends,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendList);