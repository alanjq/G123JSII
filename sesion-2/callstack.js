function foo () {
    setTimeout(()=>{
        foo()
    },3000)
}

foo()
