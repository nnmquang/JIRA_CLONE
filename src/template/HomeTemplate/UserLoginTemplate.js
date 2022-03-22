import React from 'react';

import { Route } from "react-router-dom";
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


export const UserLoginTemplate = (props) => {


    let {Component,...restRoute} = props;

    return <Route {...restRoute} render ={(propsRoute)=>{
        return <>
            {/* <Layout>
                <Sider>
                        sider
                </Sider>
                <Content>
                <Component {...propsRoute}/>
                </Content>
            </Layout> */}
            <Component {...propsRoute}/>
        </>
    }} />
}