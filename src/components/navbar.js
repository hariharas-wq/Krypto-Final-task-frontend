import React from 'react';
import { Link } from 'react-router-dom'

import { Layout, Menu } from 'antd';
import { StockOutlined, UserOutlined} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { Header } = Layout;

function Navbar() {
    return (
        <Header className="header">  
            {/* Logo Text */}
            <i class="fas-brands fas-bitcoin"></i>
            <Link to="/">
                
                <div className="logo">Bitcoin</div>
            </Link>
            {/* Menu Text */}
            <Menu theme='dark' mode="horizontal">
                <Menu.Item key="SenateTrades" icon={<StockOutlined />}>
                        <Link exact to='/Senate-Trades'>Last price</Link>
                    </Menu.Item>

                    <Menu.Item key="SenateProfiles" icon={<UserOutlined />}>
                        <Link exact to='/Senate-People'>24h change</Link>
                        
                    </Menu.Item>

                    <Menu.Item key="SenateTrades1" icon={<StockOutlined />}>
                        <Link exact to='/Senate-Trades'>24h Low</Link>
                    </Menu.Item>

                    <Menu.Item key="SenateTrades2" icon={<StockOutlined />}>
                        <Link exact to='/Senate-Trades'>24h High</Link>
                        
                    </Menu.Item>


            </Menu>

        </Header>
    )
}

// export to reuse in other files
export default Navbar;