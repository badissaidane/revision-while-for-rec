//I//

((((((("FOR")))))))

function iterrateAndLogFOR(n){
    for(i=0;i<n;i++){
        if(i%2===0){
            console.log(i+" is even")
            }else{
            console.log(i+" is odd")
            }
    }
}

((((((("WHILE")))))))

function iterrateAndLogWHILE(n){
    var i =0
    while(i<n){
        if(i%2===0){
        console.log(i+" is even")
        }else{
        console.log(i+" is odd")
        }
        i++
    }
}

//II//

((((((("FOR")))))))

function reverseIterationAndlogFor(n){
    for(i=n-1;i>=0;i--){
        if(i%2===0){
            console.log(i+" is even")
        }else{
        console.log(i+" is odd")
        }
    }
}

((((((("WHILE")))))))

function reverseIterationAndlogWHILE(n){
    var i = n-1
    while(i>=0){
        if(i%2===0){
            console.log(i+" is even")
        }else{
        console.log(i+" is odd")
        }
        i--
    }
}

(((((("RECURSION"))))))

function IterateAndLogRecursively(n){
    if(n===-1){
        return 
    }
    if(n%2===0){
        console.log(n+" is even")
    }else{
        console.log(n+" is odd")
    }
    return IterateAndLogRecursively(n-1)
}

//III//

((((((("FOR")))))))

function divFOR(n){
    for(i=n;i>0;i--){
        if(i%3===0 && i%5===0){
            return i+" is divisible by 3 and 5"
        }
        else if(i%3===0){
            return i+" is divisible by 3"
        }
        else if(i%5===0){
            return i+" is divisible by 5"
        }
        else if(i%3!==0||i%5!==0){
            return n+" is not divisible by 3 or 5"
        }
    }
        return "plz put a number larger than 0" 
}

((((((("WHILE")))))))

function divWHILE(n){
    var i=n
        while(i>0){
            if(i%3===0 && i%5===0){
                return i+" is divisible by 3 and 5"
            }
            else if(i%3===0){
                return i+" is divisible by 3"
            }
            else if(i%5===0){
                return i+" is divisible by 5"
            }
            else if(i%3!==0||i%5!==0){
                return n+" is not divisible by 3 or 5"
            }
            i--
        }
            return "plz put a number larger than 0"
}

((((((("RECURSION")))))))

function divRECURSION(n){
    var x=n
    if(n===0){
        return "0 is not an option"
        }else if(x%3===0 && x%5===0){
            return x+" is divisible by 3 and 5"
        }else if(x%3===0){
            return x+" is divisible by 3"
        }else if(x%5===0){
            return x+" is divisible by 5"
        }else{
            return x+" is not divisible by 3 or 5"
  }
    return divRECURSION(n-1)
}

//IV//

((((((("FOR")))))))

function laughFOR(n){
    var x=""
    for(i=x;i<n;i++){
        x+="ha"
    }
    return x
}

((((((("WHILE")))))))

function laughWHILE(n){
    var x=""
    var i=x
    while(i<n){
       x+="ha"
    i++
  }
  return x
}

((((((("RECURSION")))))))

function laughREC(n){
    var x= "ha"
    if(n===0){
        return ""
    }
    return x+laughREC(n-1)
}

//V//

((((((("WHILE")))))))

function sumWHile(n){
    var res=0
    var i=n
    while(i>0){
      res+=i  
    i--
    }
    console.log(res)
    return res
}

((((((("FOR")))))))

function sumFOR(n){
    var res=0
    for(i=n;i>0;i--){
        res+=i
    }
    return res
}

((((((("RECURSION")))))))

function sumREC(n){
    var res=n
    if(n===0){
        return 0
    }
    return res+sumREC(n-1)
}

//VI//

((((((("RECURSION")))))))

function FactREC(n){
    var res=n
    if(n===0){
        return 1
    }
    return res*sumREC(n-1)
}

//VII//

((((((("FOR")))))))

function rangeFOR(min,max){
    var res=min
    var arr=[]
    for(i=0;i<max-2;i++){
    arr.push(res+i)
    }
    return arr
}

((((((("WHILE")))))))

function rangeWHILE(min,max){
    var res=min
    var arr=[]
    var i=0
    while(i<max-2){
       arr.push(res+i) 
    i++
    }
    return arr
}

//VIII//

((((((("WHILE")))))))

function reverseWHILE(str){
    var res=""
    var i=0
    while(i<str.length){
        res=str[i]+res
    i++
    }
    return res
}

((((((("FOR")))))))

function reverseFOR(str){
    var res=""
    for(i=0;i<str.length;i++){
        res=str[i]+res
    }
    return res
}

((((((("RECURSION")))))))

function reverseREC(str){
    var res=""
    if(str===""){
        return res
    }
    return res=reverseREC(str.substring(str.length))+res
}
//i tried alot but i can't find it 