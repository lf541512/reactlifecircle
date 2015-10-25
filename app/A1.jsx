var React = require('react');
var A11=require('./A11.jsx');

module.exports = React.createClass({
    getInitialState(){
        console.log("init A1");
        return {count:0}
    },
    componentWillMount(){
        console.log("WillMount A1");
    },
    componentDidMount(){
        console.log("DidMount A1");
    },
    componentWillReceiveProps(nextProps){
        console.log("WillReceiveProps A1 state.count:"+ this.state.count);
    },

    componentWillUpdate(nextProps, nextState){
        console.log("WillUpdate A1 state.count:"+ this.state.count);
    },
    componentDidUpdate(prevProps, prevState){
        console.log("DidUpdate A1 state.count:"+ this.state.count);
    },
    componentWillUnmount(){
        console.log("WillUnmount A1 state.count:"+ this.state.count);
    },
    update(e){
        console.warn("start update A1");
        var count=this.state.count
        this.setState({count:count+1});
        e.stopPropagation();
    },
    render(){
        console.log("render A1 state.count:"+ this.state.count);
        return (
            <div className="A1" onClick={this.update}>
                <h1>A1</h1>
                <A11 count={this.state.count}/>
            </div>
        )
    }
})