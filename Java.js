function Task1done(Boom)
{
var bulletstyle= document.getElementById(Boom).style.textDecoration;

if (bulletstyle=='line-through')
 document.getElementById(Boom).style.textDecoration='none';

 else
 document.getElementById(Boom).style.textDecoration='line-through';

}
