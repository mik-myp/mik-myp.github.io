import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import '@ant-design/v5-patch-for-react-19';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyleProvider layer container={document.body}>
      <ConfigProvider theme={{}} locale={zhCN}>
        <App />
      </ConfigProvider>
    </StyleProvider>
  </StrictMode>
);
