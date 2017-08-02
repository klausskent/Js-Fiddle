function Task1done(Boom)
{
var bulletstyle= document.getElementById(Boom).style.textDecoration;

if (bulletstyle=='line-through')
 document.getElementById(Boom).style.textDecoration='none';

 else
 document.getElementById(Boom).style.textDecoration='line-through';

}
//function egide()
//{
//names =document.getElementsByClassName('task');
 //var i = 0;
 //while (i < names.length )
//{
//names[i].style.textDecoration='none';
//i++;
// names[y].getElementById('task').style.textDecoration='none';
//}
//}
/*
function egide()
{
names =document.getElementsByClassName('task');
for (y=0 ; y < names.length ; y++)
{
names[y].style.textDecoration='none';
// names[y].getElementById('task').style.textDecoration='none';
}
}
*/
function egide()
{
names = $('.task');
names.css("text-decoration","none") ;
}

function egide1(text)
{
  var name = prompt("Add list");
  addListItem(name);
}
function addListItem(text){

  list = document.querySelector('ol');
  item = document.createElement('li');
  item.innerText = text;
  list.appendChild(item);
}
