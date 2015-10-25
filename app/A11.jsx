var React = require('react');

module.exports = React.createClass({
    getInitialState(){
        console.log("init A11");
        return {}
    },
    componentWillMount(){
        console.log("WillMount A11");
    },
    componentDidMount(){
        console.log("DidMount A11 props.count:"+ this.props.count);
    },
    componentWillReceiveProps(nextProps){
        console.log("WillReceiveProps A11 props.count:"+ this.props.count);
    },

    componentWillUpdate(nextProps, nextState){
        console.log("WillUpdate A11 props.count:"+ this.props.count);
    },
    componentDidUpdate(prevProps, prevState){
        console.log("DidUpdate A11 props.count:"+ this.props.count);
    },
    componentWillUnmount(){
        console.log("WillUnmount A11 props.count:"+ this.props.count);
    },

    render(){
        console.log("render A11 props.count:"+ this.props.count);
        return (
            <div className="A11" >
                <h1>A11</h1>
            </div>
        )
    }
})