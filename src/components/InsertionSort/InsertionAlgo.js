export const insertionSort =(arr)=>{
    var animations=[];
    var i,key,j,n=arr.length;
    for(i=1;i<n;i++){
        key=arr[i];
        j=i-1;
        //compare
        animations.push([i,i]);
        //height
        animations.push([i,arr[i]]);
        while(j>=0 && arr[j]>key){
            //compare
            animations.push([i,j]);
            //height
            animations.push([j+1,arr[j]])
            arr[j+1]=arr[j];
            j=j-1;
        }
        //compare
        animations.push([j+1,j+1]);
        //height
        animations.push([j+1,key])
        arr[j+1]=key;
    }
    return animations;
}