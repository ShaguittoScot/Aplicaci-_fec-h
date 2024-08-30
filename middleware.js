// Middleware


var saludo = (req, res, next) => {
    var fecha = new Date().toLocaleDateString();
    var hora = new Date().toLocaleTimeString(); 
    console.log("Hola, fecha del día de hoy: " + fecha + ", hora " + hora);
    next();
};

var mensaje = (req, res, next) => {
    
    console.log("Hola, ¿cómo estás? " );
    next();
};


module.exports = { saludo, mensaje };
