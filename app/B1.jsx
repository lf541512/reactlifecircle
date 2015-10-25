var React = require('react');

module.exports = React.createClass({
    getInitialState(){
        console.log("init B1");
        return {}
    },
    componentWillMount(){
        console.log("WillMount B1");
    },
    componentDidMount(){
        console.log("DidMount B1");
    },
    componentWillReceiveProps(nextProps){
        console.log("WillReceiveProps B1");
    },

    componentWillUpdate(nextProps, nextState){
        console.log("WillUpdate B1");
    },
    componentDidUpdate(prevProps, prevState){
        console.log("DidUpdate B1");
    },
    componentWillUnmount(){
        console.log("WillUnmount B1");
    },
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldUpdate B1" );
        return true;
    },
    render(){
        console.log("render B1");
        return (
            <div className="B1">
                <h1>B1</h1>
            </div>
        )
    }
})