import { IPage } from "vue-cook"

const pages: IPage = {
    "name": "新增页面",
    "uid": "8630b4fc-7e22-4bc8-993a-0c1d36e1c2a5",
    "path": "/8630b4fc-7e22-4bc8-993a-0c1d36e1c2a5",
    "component": {
        "uid": "807dd687-c54f-4223-837a-706f918c4205",
        "name": "主应用",
        "makerType": "component",
        "makerName": "主应用",
        "makerPkg": "vue-cook",
        "slots": {
            "default": [{
                "uid": "54376c75-f1db-4ef5-9f21-ac673de70cf9",
                "name": "表格",
                "makerType": "component",
                "makerName": "表格",
                "makerPkg": "test-pkg",
                "props": {
                    "fetch": "{\"uid\":\"571a0a02-0dbe-439b-8b5b-a448e3a183bd\",\"name\":\"fetch\",\"makerType\":\"logic\",\"makerName\":\"fetch\",\"makerPkg\":\"test-pkg\",\"props\":{\"maxAge\":\"24\",\"minAge\":\"20\"}}"
                }
            }]
        }
    }
}

export default async function fetchPage(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(JSON.stringify(pages))
        }, 10)
    })
}