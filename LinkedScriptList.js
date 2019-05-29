class LinkedScriptList{
  constructor(value){
    this.list=new LinkNode(value);
    this.size=(this.list!=null?1:0);
  }
  
  addVal(value){
    if(this.list==null){
      this.list=new LinkNode(value);
    }else{
      let temp=this.list;
      while(temp.next!=null)
        temp=temp.next;
      temp.next=new LinkNode(value);
    }
    this.size++;
  }
  
  insert(value,pos){
    let newLinkNode=new LinkNode(value);
    let temp=this.list;
    if(pos>0){
      let curPos=0;
      while(temp.next!=null&&curPos<pos-1){
        curPos++;
        temp=temp.next;
      }
      newLinkNode.next=temp.next;
      temp.next=newLinkNode;
    }else{
      newLinkNode.next=temp;
      this.list=newLinkNode;
    }
    this.size++;
  }
  
  removeVal(pos){
    let temp=this.list;
    if(this.list!=null){
      if(pos>0&&pos<this.size){
        let curPos=0;
        while(temp.next!=null&&curPos<pos-1){
          curPos++;
          temp=temp.next;
        }
        temp.next=temp.next.next;
      }else if(this.size==1){
        this.list=null;
      }else if(pos<=0){
        this.list=temp.next;
      }else{
        let curPos=0;
        let endPos=this.size-2;
        while(temp.next!=null&&curPos<endPos){
          curPos++;
          temp=temp.next;
        }
        temp.next=temp.next.next;
      }
      this.size--;
    }
  }
  
  getVal(pos){
    let temp=this.list;
    if(pos>0){
      let curPos=0;
      while(temp.next!=null&&temp.next.next!=null&&curPos<pos-1){
        curPos++;
        temp=temp.next;
      }
      if(temp.next!=null){
        return temp.next.value;
      }return null;
    }
    if(this.list!=null){
      return this.list.value;
    }return null;
  }
  
  checkNew(pos){
    let temp=this.list;
    if(pos>0){
      let curPos=0;
      while(temp.next!=null&&curPos<pos-1){
        curPos++;
        temp=temp.next;
      }
      if(temp.next!=null){
        return temp.next.isNew;
      }return null;
    }
    if(this.list!=null){
      return this.list.isNew;
    }return null;
  }
  
  resetNew(){
    let temp=this.list;
    while(temp!=null){
      temp.isNew=false;
      temp=temp.next;
    }
  }
  
  toString(){
    let output="";
    let temp=this.list;
    if(temp!=null){
      while(temp.next!=null){
        output+=temp.value+" ";
        temp=temp.next;
      }output+=temp.value;
    }
    return output;
  }
  
}
