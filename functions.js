
var isArmstrong = function(n) {
	var sum = 0;
	n = String(n);
	for (var i = 0; i < n.length; ++ i)
		sum = sum + Math.pow(n[i], n.length)
	if (n == sum) 
		return true;
	else 
		return false;
};


var allArmstrongs = function() {
	var result = "";
	for (var n = 1; n <= 99999; ++ n) {
		if (isArmstrong(n)) {
			result = result + n + ", ";
		}
	}
	return result;
};


var allSubstrings1 = function(s) {
	var substrs = [];
	for (var i = 0; i < s.length; i ++) {
		for (var j = i + 1; j <= s.length; j ++) {
			substrs.push(s.substring(i, j));
		}
	}
	return substrs.join(',');
};


function allSubstrings2(str) {
	var substr = [];
	for (var x = 0; x <str.length; x ++) {
		for (var y = x + 1; y <= str.length; y ++) {
			substr.push(str.substring(x, y));
		}
	}
	return substr;
};


function maxWord(s) {
    var str = s.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
