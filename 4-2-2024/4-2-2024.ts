function twoSum(nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map();

    for (let i = 0; i < nums.length; i++) {
        // target = crr + x  
        // x = target - crr
        let x = target - nums[i];
        if (map.has(x)) {
            return [i, map.get(x)]
        }
        map.set(nums[i], i);
    }
};