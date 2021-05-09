function partition(arr,p,l,r,animations){
    var i=p+1,j=p+1;
    if(j<=r){
        while(j<=r){
            //compare
            animations.push([j,p]);
            //revert their colors
            animations.push([j,p]);
            if(arr[j]<arr[p]){
                //swap
                animations.push([i,arr[j]]);
                animations.push([j,arr[i]]);
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
                i++;
                j++;
            }
            else{
                //swap
                animations.push([j,arr[j]]);
                animations.push([j,arr[j]]);
                j++;
            }
        }
        //compare
        animations.push([i-1,p]);
        //revert their colors
        animations.push([i-1,p]);
        //swap
        animations.push([p,arr[i-1]]);
        animations.push([i-1,arr[p]]);
        let temp=arr[i-1];
        arr[i-1]=arr[p];
        arr[p]=temp;
    }    
    return i;
}

const quickSort=(arr,p,l,r,animations)=>{
    if(l<r){
        var pivot=partition(arr,p,l,r,animations);
        quickSort(arr,l,l,pivot-1,animations);
        quickSort(arr,pivot,pivot,r,animations);
    }
}

export const quickSortAlgo=(arr)=>{
    var animations=[];
    var p=0,l=0,r=arr.length-1;
    quickSort(arr,p,l,r,animations);
    return animations
}
