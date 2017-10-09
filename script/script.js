//getting the string
var input=document.getElementById('input');
var countmath=0;
var counttodo=0;
var countimage=0;
//listening for event keypress of enter key and runs function run
input.addEventListener('keypress',run);

function run(event) 
{
	if(event.which==13)
	{
		var s=input.value;
		var cod=s.split(" ");
		var l=cod.length;
		var i;

		if(cod[0].toUpperCase()=='ADD')
			add(l,cod);
		else if(cod[0].toUpperCase()=='SUBTRACT')
			subtract(l,cod);
		else if(cod[0].toUpperCase()=='TODO')
			todo(s);
		else if(s.substring(0,1)=='#'&&s.length==7)
			colour(s.substring(1,s.length));
		else if(cod[0].toUpperCase()=='CLEAR')
			clear();
		else if(cod[0].toUpperCase().substring(0,5)=='IMAGE')
			images(s);
		input.value="";
	}
}
function add(l,cod)
{
	var sum=0;
	var sum=parseFloat(cod[1])+parseFloat(cod[2]);
	if(countmath==5)
		clearm();
	++countmath;
	var result=document.getElementById('m');
	result.innerHTML=result.innerHTML+"<li>"+parseFloat(cod[1])+"+"+parseFloat(cod[2])+"="+sum+"</li>";
}
function subtract(l,cod) 
{
	var diff=0;
	diff=parseFloat(cod[1])-parseFloat(cod[2]);;
	if(countmath==5)
		clearm();
	++countmath;
	var result=document.getElementById('m');
	result.innerHTML=result.innerHTML+"<li>"+parseFloat(cod[1])+"-"+parseFloat(cod[2])+"="+diff+"</li>";
}
function todo(s) 
{
	//var list=document.getElementById('todo');
	var todo=document.getElementById('t');
	if(counttodo==5)
		cleart();
	++counttodo;
	todo.innerHTML=todo.innerHTML+"<li>"+s.substring(5,s.length).toUpperCase()+"<input type='checkbox'></li>";

}
function images(s) 
{
	var image=document.getElementById('i');
	if(countimage==5)
		cleari();
	++countimage;
	image.innerHTML=image.innerHTML+"<img src="+s.substring(5,s.length)+" >";
	
}
function colour(s)
{
	var colour=document.getElementById('colour');
	colour.innerHTML=colour.innerHTML+"#hd{ background : #"+s+";}"
}

function cleart()
{
	var clear1=document.getElementById('t');
	clear1.innerHTML="";
	counttodo=0;
	
}
function clearm()
{
	var clear2=document.getElementById('m');
	clear2.innerHTML="";
	countmath=0;
}
function cleari()
{
	var clear3=document.getElementById('i');
	clear3.innerHTML="";
	counti=0;
}
function clear()
{
	cleari();	
	clearm();
	cleart();
}