abstract class Empleado {
  public onboarding(): Record<string, any> {
    this.setInitialsConfig();
    this.completePersonalInformation();
    this.provideContractSign();

    return { conf: [this.setInitialsConfig(), this.completePersonalInformation(), this.provideContractSign()]}
  }

  protected abstract completePersonalInformation(): string;
  protected abstract provideContractSign(): string;
  protected abstract setInitialsConfig(): string;
}

export default Empleado;
