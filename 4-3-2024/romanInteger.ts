function romanToInt(s: string): number {
    const map: Map<string, number> = new Map();
    map.set('I', 1);
    map.set('IV', 4);
    map.set('V', 5);
    map.set('IX', 9);
    map.set('X', 10);
    map.set('XL', 40);
    map.set('L', 50);
    map.set('XC', 90);
    map.set('C', 100);
    map.set('CD', 400);
    map.set('D', 500);
    map.set('CM', 900);
    map.set('M', 1000);

    if (map.has(s)) {
        return map.get(s)!;
    }

    const arrOfRoman: string[] = s.split('');
    let sum: number = 0;
    for (let i = 0; i < arrOfRoman.length;) {
        const unusual: string = arrOfRoman[i].concat(arrOfRoman[i + 1]);
        if (unusual !== "IV" && unusual !== "IX" && unusual !== "XL" && unusual !== "XC" && unusual !== "CD" && unusual !== "CM") {
            sum += map.get(arrOfRoman[i])!;
            i++;
        }
        else {
            sum += map.get(unusual)!;
            i += 2;
        }
    }
    return sum;
}