function getNode(node, context = document){
  // if(isString(context)){
  //   context = document.querySelector(context)
  // }

  // context가 document가 아니라면 querySelector를 돌아줘.
  if(context.nodeType !== document.ELEMENT_NODE){
    context = document.querySelector(context);
  }

  return context.querySelector(node);
}

function getNodes(node, context = document){
  if(context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelectorAll(node);
}