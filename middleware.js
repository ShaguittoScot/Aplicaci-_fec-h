// Middleware
var saludo = (req, res, next) => {
    var fecha = new Date().toLocaleDateString();
    var hora = new Date().toLocaleTimeString(); 
    console.log("Hola, fecha del día de hoy: " + fecha + ", hora " + hora);
    next();
};

var mensaje = (req, res, next) => {
    var fecha = new Date().toLocaleDateString();
    var hora = new Date().toLocaleTimeString();
    console.log("Hola, ¿cómo estás? " + fecha + ", hora " + hora);
    next();
};


module.exports = { saludo, mensaje };
