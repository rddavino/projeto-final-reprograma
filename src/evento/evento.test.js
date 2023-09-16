const { Evento } = require("./evento");


describe("Testes para a classe Evento", () => {
  let evento1;
  beforeEach(() => {
    evento1 = new Evento("salaVirtual", "Segunda", "10:00");
  });

  describe("Verifica o método editarHorario", () => {
    it("Deveria editar o horário", () => {
      evento1.editarHorario("11:00");
      expect(evento1.horario).toBe("11:00");
    });
  });

  describe("Verifica o método editarSalaVirtual", () => {
    it("Deveria editar a sala virtual", () => {
      evento1.editarSalaVirtual("novaSala");
      expect(evento1.urlSalaVirtual).toBe("novaSala");
    });
  });

  describe("Verifica o método incluirDiaSemana", () => {
    it("Deveria incluir o dia da semana informado por parâmetro na função", () => {
      let resultado = evento1.incluirDiaSemana("terça");
      expect(resultado).toBe(true);
      expect(evento1.listaDiaSemana).toContain("terça");
    });
  });

  describe("Verifica o método excluirDiaSemana", () => {
    it("Deveria excluir o dia da semana informado por parâmetro na funcão", () => {
      evento1.incluirDiaSemana("terça");
      let resultado = evento1.excluirDiaSemana("terça");
      expect(resultado).toBe(true);
      expect(evento1.listaDiaSemana).not.toContain("terça");
    });
  });

  describe("Verifica o método excluirEvento", () => {
    it("Deveria excluir o evento", () => {
      let resultado = evento1.excluirEvento();
      expect(resultado).toBe(true);
      expect(Evento.eventosCriados).toHaveLength(0);
    });

  });
});

