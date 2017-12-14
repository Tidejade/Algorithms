function Node(data, left, right){

  this.data=data;
  this.left=left;
  this.right=right;
  this.show=show;
}

function show(){
  return this.data;
}

//////////////////////////////////////
function BST(){
  this.root=null;
  this.insert=insert;
  this.inOrder=inOrder;
  this.preOrder=preOrder;
  this.postOrder=postOrder;
  this.getMin=getMin;
  this.getMax=getMax;
  this.find=find;
}
function insert(data){

  var n=new Node(data,null,null);
  if(this.root==null){
    this.root=n;
  }
  else{
    var current=this.root;
    var parent;
    while(true){
      parent=current;
      if(data<current.data){
        current=current.left;
        if(current==null){
          parent.left=n;
          break;
        }
      }else{
        current=current.right;
        if(current==null){
          parent.right=n;
          break;
        }
      }
    }
  }
  }

//////////Search////////////////////////////////////////////////////
function inOrder(node){
  if(!(node==null)){
    inOrder(node.left);
    console.log(node.show()+ " ");
    inOrder(node.right);
  }
}
function preOrder(node){
  if(!(node==null)){
    console.log(node.show()+" ");
    preOrder(node.left);
    preOrder(node.right);
  }}
function postOrder(node){
  if(!(node==null)){
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show()+" ");
  }
}
function getMin(){
  var current=this.root;
  while(!(current.left==null)){
    current=current.left;
  }
  return current.data;
}
function getMax(){
  var current=this.root;
  while(!(current.right==null)){
    current=current.right;
  }
  return current.data;
}
function find(data){
  var current=this.root;
  while(current!=null){
    if(data==current.data){
      return current;
    }else if(data<current.data){
      current=current.left;
    }else{
      current=current.right;
    }
  }
  return null;
}
/////////////Delete/////////////////////////////////////////////////
function remove(data){
  root=removeNode(this.root,data);
}
function removeNode(node,data){
  if(node==null){
    return null;
  }
  if(data==node.data){
    if(node.left==null&&node right==null){return null;}
    if(node.lelft==null){
      return node.right;
    }
    if(node.right==null){
      return node.left;
    }
    var tempNode=getSmallest(node.right);
    node.data=tempNode.data;
    node.right=removeNode(node.right,tempNode.data);
    return node;

  }
  else if(data<node.data){
    node.left=removeNode(node.left,data);
    return node;
  }else{
  node.right=removeNode(node.right,data);
  return node;
  }
}

/////TEST////////////////////////////////////////////////////////////////
var nums=new BST();
nums.insert(23); nums.insert(45);nums.insert(16);
nums.insert(37);nums.insert(3);nums.insert(99);nums.insert(22);
var min=nums.getMin();
var max=nums.getMax();
var found=nums.find(3);
if(found!=null){
  console.log("The value is found");

}else{
  console.log("The value is not found")
}
inOrder(nums.root);
console.log("The following sequence is preOrder:");
preOrder(nums.root);
console.log("The following sequence is postOrder:");
postOrder(nums.root);
console.log("The mim is ");
console.log(min);
console.log("The maxm is ");
console.log(max);
