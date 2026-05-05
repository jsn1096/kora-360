// party/index.ts
import type * as Party from "partykit/server";

export default class ControlRoom implements Party.Server {
  escenaActual: string = "cocina";

  constructor(readonly room: Party.Room) {}

  // Cuando alguien manda un mensaje (el controlador)
  onMessage(message: string, sender: Party.Connection) {
    const data = JSON.parse(message);

    // Guardar estado actual
    if (data.type === "cambiar-escena") {
      this.escenaActual = data.escena;
    }

    // Retransmitir a TODOS (incluyendo la Vista)
    this.room.broadcast(message);
  }

  // Cuando la Vista se conecta, enviarle el estado actual
  onConnect(conn: Party.Connection) {
    conn.send(JSON.stringify({
      type: "cambiar-escena",
      escena: this.escenaActual
    }));
  }
}