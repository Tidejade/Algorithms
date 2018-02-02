/*

*/
function Stack(){
  this.dataStore=[];
  this.top=0;
  this.push=push;
  this.pop=pop;
  this.peek=peek;
  this.clear=clear;
  this.length=length;
  this.min=0;
}
function push(element){
  this.dataStore[this.top++]=element;
}
function peek(){
  return this.dataStore[this.top-1];
}
function pop(){
  return this.dataStore[--this.top];
}
function clear(){

  this.top=0;
}

function length(){
  return this.top
}
/*--------------------------------*/
function extendedPush(element){
  if(this.top==0){
    this.min=element;
  }
  this.dataStore[this.top++]=element;
  if(this.min>element){
    this.min=element;
}
  return this.min;
}

function extendedPop(){
  consle.log(this.min);
  return this.dataStore[--this.top]
}
