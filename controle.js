function alpha(x)
{
	x=x.toUpperCase()
    var i=0
    while (x.charAt(i)>="A" && x.charAt(i)<="Z" && i<x.length) 
				i++

	return i == x.length
}
function num(ch) {
    test=true
    i=0
    while(i<ch.length && test){
        c=ch.charAt(i)
        if (c<"0" || c>"9") {
            test=false
        }else{
            i++
            return test;
        }
    }
}
function verif() {
	nom = document.getElementById("nom").value;         
	pre = document.getElementById("pre").value;   
	tel = document.getElementById("tel").value;   
	if (nom=="" || !(alpha(nom))) {
		alert("verifier le nom");
		return false;
	}
	else if (pre=="" || !(alpha(nom))) {
		alert("verifier le prénom");
		return false;
	}
	else if (tel.length!=8 && (!(num(tel)))){
        alert("verifier votre numéro du telephone");
        return false;
    }
}