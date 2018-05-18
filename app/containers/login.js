import React,{ Component,PropTypes } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import { Form,Input } from 'antd';

export default class Login extends Component{
    <Form.Item {...props}>
        <Input type='text'/>
        <Input type='password' />
    </Form.Item>
}
