const removeElement = (nums, val) => {
    let pointer = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[pointer] = nums[i]
            pointer ++
        }
    }
    return [pointer, nums]



    // let k = 0
    // for(let i = 0 ; i < nums.length; i++){
    //     if(nums[i] !== val){
    //         nums[k] = nums[i]
    //         k ++
    //     }
    // }
    // return [k, nums]
}


console.log(removeElement([3,2,2,3], 3))