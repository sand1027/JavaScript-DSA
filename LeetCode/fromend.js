findKthFromEnd(k){
    let first = this.head;
    let second = this.head;
    for(let i = 0;i<k;i++){
        if(!first){
            return null;
        }
        first = first.next;
    }
    while(first){
        first = first.next;
        second = second.next
    }return second;
}
