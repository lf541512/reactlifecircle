var React = require('react');
var B1=require('./B1.jsx');

module.exports = React.createClass({
    getInitialState(){
        console.log("init B");
        return {}
    },
    componentWillMount(){
        console.log("WillMount B");
    },
    componentDidMount(){
        console.log("DidMount B");
    },
    componentWillReceiveProps(nextProps){
        console.log("WillReceiveProps B");
    },
  
    componentWillUpdate(nextProps, nextState){
        console.log("WillUpdate B");
    },
    componentDidUpdate(prevProps, prevState){
        console.log("DidUpdate B");
    },
    componentWillUnmount(){
        console.log("WillUnmount B");
    },
    shouldComponentUpdate(nextProps, nextState){
    console.log("shouldUpdate B" );
        return true;
},
    render(){
        console.log("render B");
        return (
            <div className="B">
                <h1>B</h1>
                <B1 />
            </div>
        )
    }
})