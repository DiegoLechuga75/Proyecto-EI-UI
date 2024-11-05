const sendMessageBtn = document.querySelector("#send-message-btn");
let call = 0;

const handleSendMessage = () => {
    
    const responses = [
        "¡Claro! ¿En qué estás trabajando y qué problema tienes con tu código?",
        `Tienes razón, el código no funciona porque le falta una condición de parada. Sin ella, la función se llama a sí misma infinitamente, provocando un error de desbordamiento de pila (stack overflow). En el caso del factorial, necesitamos una condición base para cuando num sea igual a 1 o 0, ya que el factorial de ambos es 1. Aquí tienes la versión corregida de tu función:<br></br>
            &nbsp function CalcularFactorial(num) {<br></br>
                &nbsp &nbsp // Condición base<br></br>
                &nbsp &nbsp if (num <= 1) {<br></br>
                &nbsp &nbsp &nbsp return 1;<br></br>
                &nbsp }<br></br>
                &nbsp &nbsp// Llamada recursiva<br></br>
                &nbsp &nbsp return num * CalcularFactorial(num - 1);<br></br>
            &nbsp }<br></br>
            Explicación:<br></br>
            Si num es 0 o 1, la función simplemente devuelve 1, deteniendo la recursión.<br></br>
            Si num es mayor que 1, se llama a sí misma con num - 1 y multiplica el resultado, siguiendo la definición del factorial.<br></br>
            ¡Prueba este código y debería funcionar!<br></br>
        `,
        "¡De nada! Me alegra que te haya sido útil. Tener en cuenta la condición de parada es clave en las funciones recursivas. Si necesitas más ayuda, aquí estoy. ¡Éxito con tu código!",
    ]
    const message = document.querySelector(".chatbot-input input");
    const chatbotMessages = document.querySelector(".chatbot-messages");
    chatbotMessages.insertAdjacentHTML("beforeend", `
            <div class="message user-message">
                <p>${message.value}</p>
            </div>
    `)
    message.value = "";
    setTimeout(() => {
        chatbotMessages.insertAdjacentHTML("beforeend", `
            <div class="message bot-message">
                <p>${responses[call]}</p>
            </div>
        `)
        call++;
    }, 2500)
}

sendMessageBtn.addEventListener("click", () => handleSendMessage());