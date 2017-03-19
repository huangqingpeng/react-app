var features1=reqiure ("./features.json")
var features2=reqiure ("./features2.json")
var features3=reqiure ("./features3.json")

var details=reqiure ("./details.json")
module.exports=function(){
	return {
		"features.php":features1,
		"features2.php":features2,
		"features3.php":features3
	}
}

