function bigger()
{
    //alert("Hello, world!");
    document.getElementById("Bigger");
    document.getElementById("input-text").style.fontSize = "24pt";
}

function myAlert()    //alert function
{
    alert("Lets get jiggy with it!");
}

function fancyText()  //fancies input text
{
    document.getElementById("input-text").style.fontWeight = "bold";
    document.getElementById("input-text").style.color = "blue";
    document.getElementById("input-text").style.textDecoration = "underline";
}

function boringText() //makes text original
{
    document.getElementById("input-text").style.fontWeight = "inherit";
    document.getElementById("input-text").style.color = "inherit";
    document.getElementById("input-text").style.textDecoration = "inherit";
    document.getElementById("input-text").style.textTransform = "inherit";

    var str = document.getElementById("input-text").value;
    //remove "-moo"
    var parts = str.split("-Moo.");
    str = parts.join(".");
    document.getElementById("input-text").value = str;
}

function moo()  //adds moo to the end of text
{
    document.getElementById("Moo");
    document.getElementById("input-text").style.textTransform = "uppercase";

    //moo text
    var str = document.getElementById("input-text").value;
    //Replace "." with "moo"
    var parts = str.split(".");
    str = parts.join("-Moo.");

    document.getElementById("input-text").value = str;
}