import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta {
    constructor(error) {
        const mensagemErro = Object.values(error.errors)
            .map(e => e.message)
            .join("; ");

        super(`Os seguintes erros foram encontrados: ${mensagemErro}`);
    }
}

export default ErroValidacao;