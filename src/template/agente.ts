import Empleado from "./empleado";

class Agente extends Empleado {
  protected completePersonalInformation() {
    return "completo informacion como agente";
  }

  protected setInitialsConfig() {
    return "Configuiracion inicial como agente";
  }

  protected provideContractSign() {
    return "Firmo contrato de trabajo";
  }
}

export default Agente;
