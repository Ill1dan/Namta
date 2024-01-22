for(var i = 1; i <= 20; i++) {
    document.write('<div class="namta">');
    for(var j = 1; j <=10; j++) {
        document.write(`${i} X ${j} = ${i * j} <br>`)
    }
    document.write("</div>")
}