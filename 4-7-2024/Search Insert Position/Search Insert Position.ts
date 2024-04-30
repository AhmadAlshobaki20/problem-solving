function searchInsert(nums: number[], target: number): number {
    if (nums.length == 0 || target == null) {
        return -1;
    }
    let mid: number = Math.floor(nums.length / 2); // calculate mid
    let i: number;
    if (target >= nums[mid]) {
        i = mid;
        sraechIndex(nums.slice(i), i);
    } else {
        i = 0;
        sraechIndex(nums.slice(0, mid), i);
    }
    if (target == nums[i]) {
        return i;
    }

    return 0;
};


function sraechIndex(arr: number[], index: number, len: number, target: number): number {

    let result: number = 0;
    for (let i = index; i < len; i++) {
        if (target == arr[i]) {
            result = i;
        }
        if (target < arr[0]) {
            result = 0;
        }
        if (target > arr[i] && target < arr[i + 1]) {
            console.log(arr[i], arr[i + 1])
            result = i + 1;
        }
        if (target > arr[len - 1]) {
            result = len + 1;
        }
    }
    return result;
}

console.log(searchInsert([1, 2, 3, 4, 5], 6));