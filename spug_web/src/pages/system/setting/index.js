import React from 'react';
import { Menu } from 'antd';
import BasicSetting from './BasicSetting';
import AlarmSetting from './AlarmSetting';
import MailServer from './MailServer';
import styles from './index.module.css';
import store from './store';


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: ['basic']
    }
  }

  componentDidMount() {
    store.fetchSettings()
  }

  render() {
    const {selectedKeys} = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <Menu
            mode="inline"
            selectedKeys={selectedKeys}
            style={{border: 'none'}}
            onSelect={({selectedKeys}) => this.setState({selectedKeys})}>
            <Menu.Item key="basic">基本设置</Menu.Item>
            <Menu.Item key="alarm">报警服务设置</Menu.Item>
            <Menu.Item key="mail">邮件服务设置</Menu.Item>
          </Menu>
        </div>
        <div className={styles.right}>
          {selectedKeys[0] === 'basic' && <BasicSetting />}
          {selectedKeys[0] === 'mail' && <MailServer />}
          {selectedKeys[0] === 'alarm' && <AlarmSetting />}
        </div>
      </div>
    )
  }
}

export default Index