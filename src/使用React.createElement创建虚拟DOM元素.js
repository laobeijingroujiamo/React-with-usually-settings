//导入时候一定要这么写
import React from  'react'  //创建组件，虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'   //把创建好的 组件和 虚拟DOM放到页面上展示的

//创建虚拟DOM元素
//参数1:创建的元素的类型，字符串，表示元素的名称
//参数2：是一个对象或null，表示当前这个DOM元素的属性
//参数3：子节点（包括 其他 虚拟DOM 获取文本子节点）
//参数n：其他子节点
const myh1=React.createElement('h1', {id:'myh1',title:'this is  h1'},'这是一个大大的H1')
const mydiv= React.createElement('div',null,'这是一个div元素',myh1)

//使用 ReactDOM 把虚拟DOM 渲染到页面上
//参数1：要渲染的那个虚拟DOM元素
//参数2：指定页面上一个DOM元素，当作容器
ReactDOM.render(mydiv,document.querySelector('#app'))