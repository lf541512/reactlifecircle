var React = require('react');
var A1=require('./A1.jsx');
module.exports = React.createClass({
    getInitialState(){
        console.log("init A");
        return {}
    },
    componentWillMount(){
        console.log("WillMount A");
    },
    componentDidMount(){
        console.log("DidMount A");
    },
    componentWillReceiveProps(nextProps){
        console.log("WillReceiveProps A");
    },

    componentWillUpdate(nextProps, nextState){
        console.log("WillUpdate A");
    },
    componentDidUpdate(prevProps, prevState){
        console.log("DidUpdate A");
    },
    componentWillUnmount(){
        console.log("WillUnmount A");
    },
    render(){
        console.log("render A");
        return (
            <div className="A">
                <h1>A</h1>
                <A1 />
            </div>
        )
    }
})