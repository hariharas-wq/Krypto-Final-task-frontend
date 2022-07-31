import React from 'react';
import { Link } from 'react-router-dom'

import { Layout, Menu } from 'antd';
import { StockOutlined, UserOutlined} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { Header } = Layout;

function Map(){
    return (
        
        <div className='radingview-widget-container'>
          <div id="tradingview_2020a"></div>
          <div className="tradingview-widget-copyright"><a href="https://in.tradingview.com/symbols/NSE-NIFTY/" rel="noopener" target="_blank"><span class="blue-text">NIFTY Chart</span></a> by TradingView</div>

          new TradingView.widget(
          {
          "autosize": true,
          "symbol": "NSE:NIFTY",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "in",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "container_id": "tradingview_2020a"
          }
          )
          </div>
          
         
    )
}