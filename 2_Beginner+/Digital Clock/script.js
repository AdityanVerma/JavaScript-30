const clock_container = document.getElementById('clock')

/* ------------------------ (( setInterval )) ------------------------
The setInterval() method of the Window interface
repeatedly calls a function or executes a code snippet,
with a fixed time delay between each call.

setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg1)
setInterval(func, delay, arg1, arg2)
setInterval(func, delay, arg1, arg2, …, argN)
*/

setInterval(function()
{
    let date = new Date()
    
    clock_container.innerHTML = date.toLocaleString('default', {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

}, 1000);
