//冒泡排序
function bubbleSort(arr) {

    var resArr = arr.slice(), len = resArr.length, i = 0, j, temp, sortOk;
    while (i < len) {
        sortOk = true;
        for (j = 0; j <= len - 1 - i; j++) {
            temp = resArr[j];
            if (resArr[j + 1] < resArr[j]) {
                this.pushHis(resArr.slice(), j);
                temp = resArr[j]
                resArr[j] = resArr[j + 1];
                resArr[j + 1] = temp;
                sortOk = false;
            }
            this.pushHis(resArr.slice(), j);
        }
        i += 1;
        if (sortOk == true) {
            break;
        }
    }
    return resArr;
}

function bubbleSortDom(arr, j) {
    var html = '', item = '', len = arr.length, i;
    for (i = 0; i < len; i++) {
        if (i == j + 1 || i == j) {
            item = '<li class="sort_li"><span class="sort_span sort_span_blue" style="height: ' + arr[i] + '%"></span></li>';
        } else {
            item = '<li class="sort_li"><span class="sort_span" style="height: ' + arr[i] + '%"></span></li>';
        }
        html = html + item;
    }

    document.querySelector('.sort_ul').innerHTML = html;
}
