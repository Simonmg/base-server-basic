interface Regla {
  name: string;
  execute(): void;
}

class ReglaEngine {
  private reglas: Regla[] = [];

  public getReglas() {
    return this.reglas;
  }

  public addReglas(regla: Regla) {
    if (!this.siReglaExiste(regla.name)) {
      this.reglas.push(regla);
    }
  }

  private siReglaExiste(name:string) {
      return this.reglas.find(regla => regla.name === name);
    }
}

// cliente

const objetoRegla = new ReglaEngine();

objetoRegla.addReglas({})

objetoRegla.getReglas().forEach(regla => regla.execute());
