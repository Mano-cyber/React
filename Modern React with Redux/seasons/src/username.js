import React from "react";

class UserForm extends React.Component {
    render() {
        return (
            <form>
                <label>Enter a username: </label>
                <input/>
            </form>
        );
    }
}

ReactDOM.render(<UserForm />, document.querySelector('#root'));