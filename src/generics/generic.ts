function repository<T extends string | number>() {
    let data: T

    function getData() {
        return data
    }

    function setData(newData: T) {
        data = newData
    }

    return { getData, setData }
}

const repo1 = repository<string | number>()


repo1.setData(20)

console.log(repo1.getData())

const repo2 = repository<string | number>()
repo2.setData(21)
console.log(repo2.getData())