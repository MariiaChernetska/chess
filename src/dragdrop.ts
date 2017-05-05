class DragElement{
    elem: any;
    clone: any;
    shiftX: any;
    shiftY: any;
    downX: any;
    downY:any;
}
export class DragnDrop{
    element: DragElement = new DragElement();
    constructor(){
        document.onmousedown = this.mouseDown.bind(this);
        document.onmousemove = this.mouseMove.bind(this);
        document.onmouseup = this.mouseUp.bind(this);
    }
    mouseDown(e:any){
        if (e.which != 1) return;
        let elem = e.target;
            if(!elem) return;
        this.element.elem = elem;
        this.element.downX = e.pageX;
        this.element.downY = e.pageY;
        return false;
    }
    mouseMove(e){
          if (!this.element.elem) return; 

    if (!this.element.clone) { 
      var moveX = e.pageX - this.element.downX;
      var moveY = e.pageY - this.element.downY;

      
      if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
        return;
      }
      this.element.clone = this.createClone(e);
      if (!this.element.clone) {
        this.element = new DragElement();
        return;
      }
      var coords = this.getCoords(this.element.clone);
      this.element.shiftX = this.element.downX - coords.left;
      this.element.shiftY = this.element.downY - coords.top;
      this.startDrag(e); 
    }
    this.element.clone.style.left = e.pageX - this.element.shiftX + 'px';
    this.element.clone.style.top = e.pageY - this.element.shiftY + 'px';
    return false;
}
 findDroppable(event) {
    this.element.clone.hidden = true;
    var elem = document.elementFromPoint(event.clientX, event.clientY);
    this.element.clone.hidden = false;
    if (elem == null) {
      return null;
    }
    return elem.closest('.droppable');
  }
 startDrag(e) {
    var clone = this.element.clone;
    document.body.appendChild(clone);
    clone.style.zIndex = 9999;
    clone.style.position = 'absolute';
  }
    mouseUp(e) {
    if (this.element.clone) { 
      this.finishDrag(e);
    }
    this.element = new DragElement();
  }
  finishDrag(e) {
    var dropElem = this.findDroppable(e);

    if (!dropElem) {
      this.onDragCancel(this.element);
    } else {
      this.onDragEnd(this.element, dropElem);
    }
  }
onDragCancel(dragObject) {
      dragObject.clone.rollback();
    };
onDragEnd(dragObject, dropElem) {
    dropElem.appendChild(dragObject.elem)
    };
getCoords(elem) { 
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}
    createClone(e){
        var clone = this.element.elem;
         var old = {
      parent: clone.parentNode,
      nextSibling: clone.nextSibling,
      position: clone.position || '',
      left: clone.left || '',
      top: clone.top || '',
      zIndex: clone.zIndex || ''
    };
    clone.rollback = function() {
      old.parent.insertBefore(clone, old.nextSibling);
      clone.style.position = old.position;
      clone.style.left = old.left;
      clone.style.top = old.top;
      clone.style.zIndex = old.zIndex
    };

    return clone;
    }
}