(() => {
    //1、数字转千分号
    function numToPermil(num) {
        const numstr = num.toString();
        const [a, b] = numstr.split('.');
        const lastDoIdx = a.length;
        let result = '';
        const differ = lastDoIdx % 3;
        for (let i = 0; i < lastDoIdx; i++) {
            result += numstr[i];
            if (i === lastDoIdx - 1) break;
            if ((i + 1) === differ || (i + 1 - differ) % 3 === 0) {
                result += ',';
            }
        }
        return result + '.' + b;
    }
    // console.log(numToPermil(1234567899.1234));
})();