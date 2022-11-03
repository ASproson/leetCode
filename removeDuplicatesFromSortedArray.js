const removeDuplicatesFromSortedArray = (nums) => {
    let left = 1
    
    for(let r = 1; r < nums.length; r++){
        if(nums[r] !== nums[r - 1]){
            nums[left] = nums[r]
            left ++
        }
    }
    return [left, nums]
}

console.log(removeDuplicatesFromSortedArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));


