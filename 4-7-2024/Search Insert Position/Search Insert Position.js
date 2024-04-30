function searchInsert(nums, target) {
    if (nums.length == 0 || target == null) {
        return -1;
    }
    var mid = Math.ceil(nums.length / 2); // calculate mid
    var i;
    if (target >= nums[mid]) {
        i = mid;
        return sraechIndex(nums, mid, nums.length - 1, target);
    }
    else {
        i = 0;
        return sraechIndex(nums, i, mid, target);
    }
};

function sraechIndex(arr, index, len, target) {
    var result
    for (let i = index; i < len; i++) {
        if (target == arr[i]) {
            result = i;
        }
        if (target < arr[0]) {
            result = 0
        }
        if (target > arr[i] && target < arr[i + 1]) {
            result = i + 1;
        }
        if (target > arr[len - 1]) {
            result = len + 1;
        }
    }
    return result;
}
console.log(searchInsert([2, 4, 6, 8, 10, 12], 11));
