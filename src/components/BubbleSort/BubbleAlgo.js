export const bubbleSort=(arr)=>{
    var animations=[];
    var n=arr.length;
    var swapped=false;
    for(let i=0;i<n-1;i++){
        swapped=false;
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                //compare 
                animations.push([j,j+1]);
                //revert
                animations.push([j,j+1]);
                //swap
                animations.push([j,arr[j+1]]);
                animations.push([j+1,arr[j]]);
                var temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
                swapped=true;
            }
        }
        if(swapped===false)break;
    }
    return animations;
}