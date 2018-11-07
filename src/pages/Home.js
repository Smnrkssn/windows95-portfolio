import React, {Component} from "react";
import {connect} from "react-redux";
import {Window95Menu} from "../site-components/Navigation";

class Home extends Component {
    render() {
        return (
            <div id="home">
                <Window95Menu/>
            </div>
        );
    }
}

const mapStateToProps = ({sample}) => {
    return {sample};
};

export default connect(mapStateToProps)(Home);
