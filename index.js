/**
 * Created by lf on 2015-10-25.
 */
var React=require('react');
var render=require('react-dom').render;
var Wrapper=require('./app/Wrapper.jsx');
require('./css/css.css');
var app=document.getElementById('app');
render(<Wrapper/>,app);