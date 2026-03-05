async function getData(){
    const data = await fetch("http://127.0.0.1:3000/getdata")

    const res = await data.json()
    
    return res
}

const data = await getData()
export const res = data.data
