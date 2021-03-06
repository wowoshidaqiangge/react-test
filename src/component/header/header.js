/** 导航 **/
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Affix } from 'antd';
import Dropdown from '../dropdown/dropdown';
import imgLogo from "static/images/common/header/logo.png";
import "./header.scss";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: 'none',
            top: 0,
            name: '',
        };
    }

    handleMouseUserOver = (event) => {
        this.setState({
            open: 'block',
        }) 
    }
    handleMouseOut = () => {
        this.setState({
            open: 'none',
        })
    }  

    componentDidMount() {
    }

    render() {
        return (
            <div className="header">
                <nav className="loginbar">
                    <div className="subLoginbar layout">
                        <div className="subLoginbarLeft">
                            <b className="phone"></b>
                            客服热线： 400-1190-717（工作时间 09:00-21:00）
                            <Dropdown name="weChat" />
                            <Dropdown name="qq" />
                        </div>
                        <div className="subLoginbarRight">
                            <Link to="/register">注册</Link>
                            <i>/</i>
                            <Link to="/login">登录</Link>
                            <Dropdown name="app" />
                            <span className="one">手机客户端</span>
                            <span className="two">市场有风险，出借需谨慎</span>
                        </div>
                    </div>
                </nav>
                <Affix offsetTop={this.state.top}>
                    <div className="nav layout">
                        <div className="navClear">
                            <div className="logo">
                                <img src={imgLogo} alt="logo" />
                            </div>
                            <div className="subNav">
                                <ul>
                                    <li><NavLink to="/home">首页</NavLink></li>
                                    <li><NavLink to="/lend">我要出借</NavLink></li>
                                    <li><NavLink to="/safe">稳健发展</NavLink></li>
                                    <li onMouseOver={this.handleMouseUserOver} onMouseLeave={this.handleMouseOut} source='news'>
                                        <NavLink to="/about">信息披露</NavLink>
                                        <div className="selectNav" style={{display:this.state.open}}>
                                            <ol>
                                                <li>
                                                    <Link to="/about?id=1">关于华赢宝</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about?id=2">团队介绍</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about?id=3">业务介绍</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about?id=4">运营数据</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about?id=5">媒体报道</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about?id=6">公司动态</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about?id=7">从业机构信息</Link>
                                                </li>
                                                <li>
                                                    <Link to="/about?id=8">相关法律法规披露</Link>
                                                </li>
                                            </ol>
                                        </div>
                                    </li>
                                    <li><NavLink to="/member">我的账户</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Affix>
            </div>
        );
    }
}

// <NavLink to={{
        //     pathname: "/test",
        //     search: "?a=123&b=abc",
        //     state: { c: "456", d: "ABC" }
        //   }}
        // >
        //   测试页面
        // </NavLink>|