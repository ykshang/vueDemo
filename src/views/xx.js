/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let oddflag = (nums1.length + nums2.length)%2 ==1;
  let xx = (nums1.length + nums2.length) >>1;
  let mid = oddflag? xx+1:xx; 
  let temp = 0;
  let i = 0;
  let j = 0;
  let arry = [];
  let jmax= false;
  let imax= false;
  while(temp < mid+1) {
    debugger;
    if(j>nums2.length-1){
      j=nums2.length-1;
      jmax = true;
    }
    if(i>nums1.length-1){
      i=nums1.length-1;
      imax = true;
    }
    if(nums1[i]>nums2[j]){
      if(!jmax){
        arry.push(nums2[j]);
        j = j + 1;
        temp = temp + 1;
      } else{
        arry.push(nums1[i]);
        i = i + 1;
        temp = temp + 1;
      }
    }
    if (nums1[i]<nums2[j]){
      if(!imax){
        arry.push(nums1[i]);
        i = i + 1;
        temp = temp + 1;
      } else{
        arry.push(nums2[j]);
        j = j + 1;
        temp = temp + 1;
      }
    }
    if (nums1[i] == nums2[j]){
      arry.push(nums1[i]);
      arry.push(nums2[j]);
      j = j + 1;
      i = i + 1;
      temp = temp + 2;
    }
  }  
  let aaa;
  if(oddflag){
    aaa = arry[mid-1]
  } else {
    aaa = (arry[mid-1]+ arry[mid])/2;
  }
  return aaa;
}