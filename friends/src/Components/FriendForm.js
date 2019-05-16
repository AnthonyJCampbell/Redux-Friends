import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postFriends } from './../actions/actions'

class FriendForm extends Component {
    name = React.createRef();
    age = React.createRef();
    email = React.createRef();

    onAddFriend = (e) => {
        e.preventDefault();
        const name = this.name.current;
        const age = this.age.current;
        const email = this.email.current;
        // Invoke addQuoteAsync at this point.
        // Review its definition to know how to invoke it correctly.
        const newFriend = {
            name: name.value,
            age: age.value,
            email: email.value
        };
    
        this.props.postFriends(newFriend);
    
        name.value = '';
        age.value = '';
        email.value = '';
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" 
                        ref={this.name}/>
                    <input type="text" 
                        ref={this.age} />
                    <input type="text" 
                        ref={this.email} />
                    <button onClick={this.onAddFriend}>Add Quote</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        friends: state.getFriends.friends,
        savingFriends: state.getFriends.friends,
        friendsSaved: state.getFriends.friendsSaved, 
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postFriends,
    }, dispatch);
}  
export default connect(mapStateToProps, mapDispatchToProps)(FriendForm);

