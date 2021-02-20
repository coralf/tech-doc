
//虚拟Dom的类型
const VNODE_TYPE = {
  HTML: 'HTML',
  TEXT: 'TEXT',
  COMPONENT: 'COMPONENT'
};


//children数量类型
let CHILD_TYPE = {
  EMPTY: 'EMPTY',
  SINGLE: 'SINGLE',
  MULTIPLE: 'MULTIPLE'
}


function createElement(tag, data, children = null) {

  //确定vNode的类型
  let flag = null;
  if (typeof tag === 'string') {
    flag = VNODE_TYPE.HTML;//普通HTML
  } else if (typeof tag === 'function') {
    flag = VNODE_TYPE.COMPONENT;//函数式组件
  } else {
    flag == VNODE_TYPE.TEXT;//文本
  }

  let childFlag = null;
  if (Array.isArray(children)) {//如果children是一个数组
    const { length } = children;
    if (length === 0) {
      childFlag = CHILD_TYPE.EMPTY;
    } else {//
      childFlag = CHILD_TYPE.MULTIPLE;
    }
  } else if (children === null) {//没有children的情况
    childFlag = CHILD_TYPE.EMPTY;
  } else {//children是一个字符串
    childFlag = CHILD_TYPE.SINGLE;
    children = createTextVNode(children);
  }

  return {
    flag,
    tag,
    data,
    key: data && data.key,
    children,
    childFlag,
    el: null
  };
}



function createTextVNode(text) {
  return {
    flag: VNODE_TYPE.TEXT,
    tag: null,
    data: null,
    children: text,
    childFlag: CHILD_TYPE.EMPTY
  }
}



function patchData(el, key, preValue, nextValue) {
  switch (key) {
    case 'style':
      //更新最新的css
      for (let k in nextValue) {

        el.style[k] = nextValue[k];
      }
      //移出旧的css
      for (let k in preValue) {
        if (!nextValue.hasOwnProperty(k)) {
          el.style[k] = '';
        }
      }
      break;
    case 'class':
      el.className = nextValue;
      break;
    default:
      if (key[0] === '@') {
        if (preValue) {//移出之前的事件
          el.removeEventListener(key.slice(1), preValue);
        }
        if (nextValue) {//绑定新的事件
          el.addEventListener(key.slice(1), nextValue);
        }
      } else {//以上的都没匹配到就当做属性来处理
        el.setAttribute(key, nextValue);
      }
      break;
  }


}

function mountElement(vnode, container, refNode) {
  const el = document.createElement(vnode.tag);
  vnode.el = el;
  const { data } = vnode;
  if (data) {//将data里面的数据绑定到el中
    for (let key in data) {
      patchData(el, key, null, data[key]);
    }
  }

  const { childFlag, children } = vnode;
  if (childFlag !== CHILD_TYPE.EMPTY) {//如果有子元素
    if (childFlag === CHILD_TYPE.SINGLE) {//单个元素
      mount(children, el);//递归渲染
    } else if (childFlag === CHILD_TYPE.MULTIPLE) {//多个子元素
      for (let i = 0; i < children.length; i++) {//渲染多个子元素
        mount(children[i], el);
      }
    }
  }
  refNode ? container.insertBefore(el, refNode) : container.appendChild(el);
}


function mountText(vnode, container) {
  const el = document.createTextNode(vnode.children);
  vnode.el = el;
  container.appendChild(el);
}

function mount(vnode, container, refNode) {
  const { flag } = vnode;
  if (flag === VNODE_TYPE.HTML) {//渲染html元素
    mountElement(vnode, container, refNode);
  } else {//渲染文本
    mountText(vnode, container);
  }
}

function replaceVNode(preVNode, nextVnode, container) {
  container.removeChild(preVNode.el);//移出之前的vnode
  mount(nextVnode, container);//重新渲染新的节点
}


function patchText(preVNode, nextVnode) {
  const el = (nextVnode.el = preVNode.el);//将之前的el指向现在的VDOM中的el
  if (nextVnode.children !== preVNode.children) {//新旧文本不一致才更新
    el.nodeValue = nextVnode.children;
  }
}

/* 
对比新旧节点更新
*/
function patchChildren(
  preChildFlag,
  nextChildFlag,
  preChildren,
  nextChildren,
  container
) {
  //这里是3*3种情况
  if (preChildFlag === CHILD_TYPE.SINGLE) {
    if (nextChildFlag === CHILD_TYPE.SINGLE) {//都为一个的时候直接对比就行了
      patch(preChildren, nextChildren);
    } else if (nextChildFlag === CHILD_TYPE.EMPTY) {//
      container.removeChild(preChildren.el);
    } else {//一单，多
      container.removeChild(preChildren.el);
      for (let i = 0; i < nextChildren.length; i++) {
        mount(nextChildren[i], container);
      }
    }
  } else if (preChildFlag === CHILD_TYPE.EMPTY) {
    if (nextChildFlag === CHILD_TYPE.SINGLE) {
      mount(nextChildren, container);
    } else if (nextChildFlag === CHILD_TYPE.MULTIPLE) {//一单，多
      for (let i = 0; i < nextChildren.length; i++) {
        mount(nextChildren[i], container);
      }
    }
    //else  这里都为空的情况就不考虑了 
  } else {
    if (nextChildFlag === CHILD_TYPE.SINGLE) {
      for (let i = 0; i < preChildren.length; i++) {//将之前的dom移出，然后挂载新的
        container.removeChild(preChildren[i].el);
      }
      mount(nextChildren, container);
    } else if (nextChildFlag === CHILD_TYPE.EMPTY) {
      for (let i = 0; i < preChildren.length; i++) {
        container.removeChild(preChildren[i].el);
      }
    } else {//之前的pre为多个，next为多个的情况
      let lastIndex = 0;
      for (let i = 0; i < nextChildren.length; i++) {
        const nextVNode = nextChildren[i];
        let find = false;
        let j = 0;
        while (j < preChildren.length) {
          const preVNode = preChildren[j];
          if (nextVNode.key === preVNode.key) {//如果key一样patch,位置移动
            find = true;
            patch(preVNode, nextVNode, container);
            if (j < lastIndex) {
              const refNode = nextChildren[i - 1].el.nextSibling;//获取到实例
              container.insertBefore(preVNode.el, refNode);
              break;
            } else {
              lastIndex = j;
            }
          }
          j++;
        }
        if (!find) {
          const refNode = i - 1 < 0 ? preChildren[0].el : nextChildren[i - 1].el.nextSibling;
          mount(nextVNode, container, refNode);
        }
      }
      for (let i = 0; i < preChildren.length; i++) {
        const preVNode = preChildren[i];
        const has = nextChildren.find(nextVNode => nextVNode.key === preVNode.key);
        if (!has) {
          container.removeChild(preVNode.el);
        }
      }
    }
  }
}


function patchElment(preVNode, nextVNode, container) {
  if (preVNode.tag !== nextVNode.tag) {//如果pre是div,next是h1则直接替换
    replaceVNode(preVNode, nextVNode, container);
    return;
  }

  const el = (nextVNode.el = preVNode.el);//拿到el元素
  const { data: preData } = preVNode;
  const { data: nextData } = nextVNode;

  //绑定新的props
  if (nextData) {
    for (let key in nextData) {
      const preValue = preData[key];
      const nextValue = nextData[key];
      patchData(el, key, preValue, nextValue);
    }
  }


  //删除之前的props
  if (preData) {
    for (let key in preData) {
      const preValue = preData[key];
      if (preValue && !nextData.hasOwnProperty(key)) {//如果没有nextData.hasOwnProperty(key)会将以前旧的props更新到新的props
        patchData(el, key, preValue, null);
      }
    }
  }


  patchChildren(
    preVNode.childFlag,
    nextVNode.childFlag,
    preVNode.children,
    nextVNode.children,
    el
  );
}

function patch(preVNode, nextVnode, container) {
  const { flag: preFlag } = preVNode;
  const { flag: nextFlag } = nextVnode;
  if (preFlag !== nextFlag) {//如果节点类型都不一样了就直接替换
    replaceVNode(preVNode, nextVnode, container);
  } else if (nextFlag === VNODE_TYPE.HTML) {//如果节点类型一样，为html元素的情况
    patchElment(preVNode, nextVnode, container);
  } else if (nextFlag === VNODE_TYPE.TEXT) {//如果节点类型一样，为文本节点的情况
    patchText(preVNode, nextVnode);
  }
}

function render(vnode, container) {
  const { vnode: preVNode = null } = container;//如果之前被渲染了，可以在container中获取之前挂载在dom上面的vnode对象
  if (preVNode === null) {//第一次渲染
    mount(vnode, container);
  } else {
    patch(preVNode, vnode, container);//更新对比虚拟dom渲染
  }
  container.vnode = vnode;
}