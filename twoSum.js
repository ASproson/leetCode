const twoSum = (nums, target) => {
    // for(let i = 0; i < nums.length; i++){
    //     for(let j = 1; j < nums.length; j++){
    //         if(nums[i] + nums[j] === target && i !== j){
    //             return [i, j]
    //         }
    //     }
    // }
    const hashMap = {}
    for(let i = 0; i < nums.length; i++){
        console.log(hashMap)
        if(hashMap[nums[i]] >= 0){
            return [hashMap[nums[i]], i]
        }
        hashMap[target - nums[i]] = i
    }
}

// console.log(twoSum([3, 3], 6))
console.log(twoSum([2,5,5,11], 10))
