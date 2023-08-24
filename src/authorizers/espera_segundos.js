module.exports = function (deployer) {
    return async function (request, response, parametro) {
        try {
            await new Promise((ok, fail) => {
                setTimeout(function() {
                    ok();
                }, parseInt(parametro));
            });
        } catch (error) {
            console.error("Error en «src/authorizers/espera_segundos.js»");
            console.error(error);
            deployer.utilities.gestor_de_error_de_peticion(response, error);
        }
    };
};