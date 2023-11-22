const verifyTypes = (list) =>{
    const arrVerify = list.every((num) => typeof num === 'number')
    return arrVerify
}

const maxArr = (list) => {
    const maxList = list.sort((a,b)=>{
        if(a > b){
            return 1
        }

        if(a < b){
            return -1
        }

        return 0
    })

    return maxList
}

const mimAndMaxValues = (list) => {

    const verifyList = Array.isArray(list)

    if(!verifyList){
        return "parâmetro list deve ser um array"
    }

    const typeNumber = verifyTypes(list)

    if(!typeNumber){
        return "todos os itens da lista devem ser do tipo number"
    }

    const orderListMax = maxArr(list)
    const orderListMim = [...orderListMax]

    orderListMim.shift()
    orderListMax.pop()
    
    const maxValue = orderListMax.reduce((acc, num)=>{
        return acc + num
    },0)

    const mimValue = orderListMim.reduce((acc, num)=>{
        return acc + num
    },0)

    const listValues = [maxValue, mimValue]
    return listValues
}

const lista = [1,5,3,9,6]
console.log(mimAndMaxValues(lista))


