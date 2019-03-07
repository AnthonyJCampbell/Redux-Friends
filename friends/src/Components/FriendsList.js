import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { fetchFriends } from './../actions/actions'

class FriendList extends Component {
    componentDidMount() {
        this.props.fetchFriends();
    }
    
    render() {
        console.log(this.props.friends)
        return (
            <div>
                This is the friend LIST
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        fetchingFriends: state.fetchingFriends,
        friends: state.friends,
    }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        fetchFriends,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendList);