var React = require('react');
var A=require('./A.jsx');
var B=require('./B.jsx');
module.exports = React.createClass({
    getInitialState(){
        console.log("init Wrapper");
        return {}
    },
    componentWillMount(){
        console.log("WillMount Wrapper");
    },
    componentDidMount(){
        console.log("DidMount Wrapper");
    },
    componentWillReceiveProps(nextProps){
        console.log("WillReceiveProps Wrapper");
    },

    componentWillUpdate(nextProps, nextState){
        console.log("WillUpdate Wrapper");
    },
    componentDidUpdate(prevProps, prevState){
        console.log("DidUpdate Wrapper");
    },
    componentWillUnmount(){
        console.log("WillUnmount Wrapper");
    },
    update(){
        console.warn("start update Wrapper");
      this.setState({});
    },
    render(){
        console.log("render Wrapper");
        return (
            <div className="wrapper" onClick={this.update}>
                <h1>wrapper</h1>
                <A />
                <B />
            </div>
        )
    }
})