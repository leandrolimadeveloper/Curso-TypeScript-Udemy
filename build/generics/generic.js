"use strict";
function repository() {
    let data;
    function getData() {
        return data;
    }
    function setData(newData) {
        data = newData;
    }
    return { getData, setData };
}
const repo1 = repository();
repo1.setData(20);
console.log(repo1.getData());
const repo2 = repository();
repo2.setData(21);
console.log(repo2.getData());
