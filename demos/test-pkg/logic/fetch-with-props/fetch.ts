// fetch.ts
interface IDataItem {
    name: string,
    age: number
}
const data: IDataItem[] = [
    { name: "刘一", age: 18 },
    { name: "陈二", age: 19 },
    { name: "张三", age: 20 },
    { name: "李四", age: 21 },
    { name: "王五", age: 22 },
    { name: "赵六", age: 23 },
    { name: "孙七", age: 24 },
    { name: "周八", age: 25 },
    { name: "吴九", age: 26 },
    { name: "郑十", age: 27 },
]
export default async function fetch(maxAge: number = Infinity, minAge: number = 0) {
    return new Promise((resolve, reject) => {
        const _data = data.filter(e => {
            if (e.age > maxAge) {
                return false
            }
            if (e.age < minAge) {
                return false
            }
            return true
        })
        setTimeout(() => {
            resolve(_data)
        }, 1000)
    })
}