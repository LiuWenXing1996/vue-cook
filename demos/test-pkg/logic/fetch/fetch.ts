// fetch.ts
interface IDataItem {
    name: string,
    age: number
}
export default async function fetch() {
    return new Promise((resolve, reject) => {
        const data: IDataItem[] = [
            { name: "张三", age: 20 },
            { name: "李四", age: 21 },
        ]
        setTimeout(() => {
            resolve(data)
        }, 1000)
    })
}