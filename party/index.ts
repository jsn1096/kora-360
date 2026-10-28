/// <reference types="@cloudflare/workers-types" />

import { routePartykitRequest, Server } from "partyserver";
import type { Connection, WSMessage } from "partyserver";

type Env = {
  Main: DurableObjectNamespace<ControlRoom>;
};

export class ControlRoom extends Server<Env> {
  estadoActual = JSON.stringify({
    type: "cambiar-escena",
    escena: "entrada1",
    seccion: "areas-sociales",
  });

  onMessage(_sender: Connection, message: WSMessage) {
    if (typeof message !== "string") return;

    let data: { type?: string };

    try {
      data = JSON.parse(message);
    } catch {
      return;
    }

    if (data.type === "cambiar-escena" || data.type === "cambiar-video") {
      this.estadoActual = message;
    }

    this.broadcast(message);
  }

  onConnect(connection: Connection) {
    connection.send(this.estadoActual);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return (
      (await routePartykitRequest(request, env)) ||
      new Response("Not Found", { status: 404 })
    );
  },
} satisfies ExportedHandler<Env>;
