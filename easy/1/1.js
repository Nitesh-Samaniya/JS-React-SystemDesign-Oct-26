function areAnagram(str1, str2) {
    // convert to lower case and remove the spaces
    const s1 = str1.toLowerCase().replace(/\s/g, "");
    const s2 = str2.toLowerCase().replace(/\s/g, "");

    const countS1 = {};
    const countS2 = {};

    if (s1?.length !== s2?.length) {
        return false;
    }

    for (let char of s1) {
        if (countS1[char]) {
            countS1[char]++;
        } else {
            countS1[char] = 1;
        }
    }

    for (let char of s2) {
        countS2[char] = (countS2[char] || 0) + 1;
    }

    for (let key in countS1) {
        if (countS1[key] !== countS2[key]) {
            return false;
        }
    }

    for (let key in countS2) {
        if (countS1[key] !== countS2[key]) {
            return false;
        }
    }

    return true;

}

const result = areAnagram("listen", "pilent")
console.log(result)