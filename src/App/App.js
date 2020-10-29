import React, { Component } from 'react';
import './App.scss';
import StudentListCard from './components/StudentListCard';
import StudentTeamCard from './components/StudentTeamCard';

// TODO GTB-1: * 页面有一定样式，但还差很远
// TODO GTB-1: * 完成需求1，从后端得到学员列表，但有分组button和分组事件请求只是没有实现功能
// TODO GTB-2: * 没有测试
// TODO GTB-3: * 有划分分组列表和学员列表
// TODO GTB-3: * 语义化标签使用可以加强
// TODO GTB-3: * 使用了Flex布局和grid布局
// TODO GTB-3: * 运用了一些ES6+语法
// TODO GTB-3: * 运用React hooks知识点
// TODO GTB-4: * 小步提交做的不错
// TODO GTB-4: * 没有抽出Api请求层
// TODO GTB-4: * 一定层度但组件拆分，但对组件的抽象与复用还可以加强
class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        {/* TODO GTB-4: - 命名可以优化，这里应该不是card */}
        <StudentTeamCard />
        <StudentListCard />
      </div>
    );
  }
}

export default App;
