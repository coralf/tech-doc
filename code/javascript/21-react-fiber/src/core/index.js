function createTextElement(text) {
  return {
    type: 'TEXT',
    props: {
      nodeValue: text,
      children: []
    }
  }
}

function createElement(type, props, ...children) {


  return {
    type,
    props: {
      ...props,
      children: children.map(child => (
        typeof child === 'object' ? child : createTextElement(child)
      ))
    }
  };
}


function createDom(vdom) {
  const dom = vdom.type === 'TEXT' ? document.createTextNode('') : document.createElement(vdom.type);
  updateDom(dom, {}, vdom.props);
  return dom;
}



function updateDom(dom, prevProps, nextProps) {
  //移出之前dom上面的属性和事件监听
  Object.keys(prevProps)
    .filter(name => name !== 'children')
    .filter(name => !(name in nextProps))
    .forEach(name => {
      if (name.slice(0, 2) === 'on') {
        dom.removeEventListener(name.slice(2).toLocaleLowerCase, prevProps[name], false)
      } else {
        dom[name] = '';
      }
    });

  //添加新的属性和事件监听
  Object.keys(nextProps)
    .filter(name => name !== 'children')
    .forEach(name => {
      if (name.slice(0, 2) === 'on') {
        dom.addEventListener(name.slice(2).toLowerCase(), nextProps[name], false);
      } else {
        dom[name] = nextProps[name];
      }
    });
}

let nextUnitOfWork = null;
let wipRoot = null;
let currentRoot = null;
let deletions = [];


function performUnitOfWork(fiber){


}


function commitRoot(){



  
}

//利用浏览器空闲时间来进行任务调度
function workLoop(deadline) {

  //还有更新的任务，并且还有时间更新
  while (nextUnitOfWork && deadline.timeRemaining() > 1) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }

  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }

  requestIdleCallback(workLoop);
}


requestIdleCallback(workLoop);



function render(vdom, container) {
  wipRoot = {
    dom: container,
    props: {
      children: [vdom]
    },
    base: currentRoot
  };
  deletions = [];
  nextUnitOfWork = wipRoot;
  return dom;
}

export default {
  createElement,
  render
}