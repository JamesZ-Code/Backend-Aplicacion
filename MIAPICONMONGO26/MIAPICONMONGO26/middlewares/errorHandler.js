module.exports = (err, req, res, next) => {
    console.error('Error capturado por el Middleware Global:', err);

    let status = err.status || 500;
    let message = err.message || 'Ocurrió un error interno en el servidor.';


    if (err.name === 'ValidationError') {
        status = 400;
        message = Object.values(err.errors).map(val => val.message).join(', ');
    }
    else if (err.code === 11000) {
        status = 400;
        message = err.message || 'Llave duplicada: El recurso ya existe en la base de datos.';
    }
    else if (err.name === 'CastError') {
        status = 400;
        message = `ID inválido para el campo: ${err.path} con valor: ${err.value}`;
    }

    res.status(status).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
};
