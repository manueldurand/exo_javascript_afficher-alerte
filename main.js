document.writeln('<form id="form1">');
document.writeln('<div>');
document.writeln('<label for="champ1">A vous :</label>');
document.writeln('<input type="text" id="champ1">');
document.writeln('</div>');
document.writeln('<input type="submit" id="submit">')
document.writeln('</form>');
document.getElementById("champ1").focus();
document.addEventListener("submit", test_reponse);
function test_reponse(){
    let reponse = document.getElementById("champ1").value;
    if (reponse.length == 0){
        test_reponse.preventDefault;
        alert("pensez à écrire quelquechose ...!");
        document.getElementById("champ1").focus();
    }
    else{
        alert("Ok,"+ " "+reponse + ", c'est noté")
    }
};

