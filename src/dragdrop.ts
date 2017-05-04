class DragElement{
    elem: any;
    initX: any;
    initY: any;
    clone: any;
}
export class DragnDrop{
    element: any;
    constructor(){
        document.onmousedown = this.mouseDown.bind(this);
    }
    mouseDown(e:any){
        if (e.which != 1) return;
        let elem = e.target;
            if(!elem) return;
        this.element.elem = elem;
        this.element.initX = e.pageX;
        this.element.initY = e.pageY;
        return false;
    }
    mouseMove(e){
        if (!this.element.elem) return;
        this.element.clone = this.createClone(e); 
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