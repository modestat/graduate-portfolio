difference between arrow and funciton by an exmpale: 

  <button onClick={alert("I run immediately!")}>Button 1</button>
<button onClick={() => alert("I run when clicked!")}>Button 2</button>

What happens:

Button 1: Alert pops up immediately when page loads
Button 2: Alert only pops up when you click the button

The () => Part:
It's just a way to say "wait until clicked, THEN do this"
For Your Project:
jsxonClick={() => openProject(project)}
Means: "Wait until clicked, THEN call openProject with this specific project"