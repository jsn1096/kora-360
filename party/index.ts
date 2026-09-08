// party/index.ts
import type * as Party from "partykit/server";

export default class ControlRoom implements Party.Server {
  estadoActual = JSON.stringify({
    type: "cambiar-escena",
    escena: "entrada1",
    seccion: "areas-sociales",
  });

  constructor(readonly room: Party.Room) {}

  // Cuando alguien manda un mensaje (el controlador)
  onMessage(message: string, sender: Party.Connection) {
    let data: { type?: string };

    try {
      data = JSON.parse(message);
    } catch {
      return;
    }

    // Guardar el último estado para que un visor recién conectado se sincronice.
    if (data.type === "cambiar-escena" || data.type === "cambiar-video") {
      this.estadoActual = message;
    }

    // Retransmitir a TODOS (incluyendo la Vista)
    this.room.broadcast(message);
  }

  // Cuando la Vista se conecta, enviarle el estado actual
  onConnect(conn: Party.Connection) {
    conn.send(this.estadoActual);
  }
}
