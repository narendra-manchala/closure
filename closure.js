function buildFunctions(){
	var arr=[];
	for(var i=0; i<3; i++){
		arr.push(function(){
			console.log(i)
		})
	}
	return arr
}

var fs=buildFunctions()

fs[0]()
fs[1]()
fs[2]()

// Using closures
console.log(" Using closures")

function buildFunctions2(){
	var arr=[];
	for(var i=0; i<3; i++){
		arr.push(
			(function(j){
			return function(){
				console.log(j)
			}
		}(i))
		)
	}
	return arr
}

var fs2=buildFunctions2()
console.log(fs2)
fs2[0]()
fs2[1]()
fs2[2]()

// Using let - let creates block scope
console.log(" Using let")
function buildFunctions(){
	var arr=[];
	for(let i=0; i<3; i++){
		arr.push(function(){
			console.log(i)
		})
	}
	return arr
}

var fs=buildFunctions()

fs[0]()
fs[1]()
fs[2]()