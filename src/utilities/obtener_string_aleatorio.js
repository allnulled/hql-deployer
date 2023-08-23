const alfabeto_por_defecto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

module.exports = function (deployer) {
    return function (caracteres, alfabeto = alfabeto_por_defecto) {
        let output = "";
        for (let index = 0; index < caracteres; index++) {
            output += alfabeto[Math.floor(Math.random() * alfabeto.length)];
        }
        return output;
    };
};