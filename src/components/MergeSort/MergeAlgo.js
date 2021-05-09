function merge(arr,l,mid,r,animations){
  var x=l;
  var y=r;
  const aux=[];
  var st2=mid+1;
  var k=l;
  while(l<=mid && st2<=r){
    //compare
    animations.push([l,st2]);
    //to revert their color
    animations.push([l,st2]);
    if(arr[l]<arr[st2]){
      //sorted
      animations.push([k,arr[l]]);
      aux.push(arr[l]);
      l++;
      k++;
    }
    else{
      //sorted
      animations.push([k,arr[st2]]);
      aux.push(arr[st2]);
      st2++;
      k++;
    }
  }
  while(l<=mid){
    //compare
    animations.push([l,l]);
    //to revert the changes
    animations.push([l,l]);
    //sorted
    animations.push([k,arr[l]]);
    k++;
    aux.push(arr[l]);
    l++;
  }
  while(st2<=r){   
    //compare
    animations.push([st2,st2]);
    //to revert the changes
    animations.push([st2,st2]);
    //sorted
    animations.push([k,arr[st2]]);
    k++;
    aux.push(arr[st2]);
    st2++;
  }
  for(var i=x;i<=y;i++){
    arr[i]=aux[i-x];
  }
}


function mergeSort(arr,l,r,n,animations){
  if(l>=r){
    return;
  }
  var mid=Math.floor((l+r)/2);
  mergeSort(arr,l,mid,n,animations);
  mergeSort(arr,mid+1,r,n,animations);
  merge(arr,l,mid,r,animations);
}

export const getMergeSortAnimatoins=(arr)=>{
  var copyArr=arr.slice();
  var animations=[];
  if(arr.length<=1)return arr;
  var n=arr.length;
  var l=0;
  var r=n-1;
  mergeSort(copyArr,l,r,n,animations);
  return animations;
}

