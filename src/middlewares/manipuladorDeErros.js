import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(error, req, res, next) {
  if (error instanceof mongoose.CastError) {
    new RequisicaoIncorreta().enviarResposta(res);
    return;
  }
  if (error instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(error).enviarResposta(res);
    return;
  }
  if(error instanceof ErroBase){
    error.enviarResposta(res);
    return;
  }
  new ErroBase().enviarResposta(res);
}

export default manipuladorDeErros;