function twoSum(nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        // target = crr + x  
        // x = target - crr
        var x = target - nums[i];
        if (map.has(x)) {
            return [i, map.get(x)];
        }
        map.set(nums[i], i);
    }
}
;
