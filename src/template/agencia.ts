
import Empleado from "./empleado";

class Agencia extends Empleado {
  protected completePersonalInformation() {
    return "completo informacion como agencia";
  }

  protected setInitialsConfig() {
    return "Configuiracion inicial como agencia pero con otra logica de negocio";
  }

  protected provideContractSign() {
    return "Firmo contrato de trabajo pero con otra logica de negocio";
  }
}

export default Agencia;
