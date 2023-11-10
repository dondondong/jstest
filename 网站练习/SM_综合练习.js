// 生成随机数，并且是偶数

function test() {
    const randomNum = Math.floor(Math.random() * 100) //四舍五入

    if (randomNum % 2 ===0){
        return console.log(randomNum)    
    }else{
        return test()
    }
    
}

test()