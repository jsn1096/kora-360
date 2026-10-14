export interface FichaUnidad {
  nombre: string;
  tipo: string;
  ubicacionImagen?: string;
  superficies: {
    area?: number;
    areaBalconFrances?: number;
    areaBalcon?: number;
    areaTotal?: number;
    piso?: string | number;
  };
  distribucion: {
    balcon?: boolean;
    cuartos?: number;
    banos?: number;
    cuartoLavado?: boolean;
  };
}

export const fichaTecnicaHabilitada = false;

export const fichasUnidades: Record<string, FichaUnidad> = {
  "estudio-404": {
    nombre: "Estudio 404",
    tipo: "Estudio",
    ubicacionImagen: "/ubicacion/404.webp",
    superficies: {
      area: undefined,
      areaBalconFrances: undefined,
      areaBalcon: undefined,
      areaTotal: undefined,
      piso: undefined,
    },
    distribucion: {
      balcon: undefined,
      cuartos: undefined,
      banos: undefined,
      cuartoLavado: undefined,
    },
  },
  "estudio-409": {
    nombre: "Estudio 409",
    tipo: "Estudio",
    ubicacionImagen: "/ubicacion/409.webp",
    superficies: {
      area: undefined,
      areaBalconFrances: undefined,
      areaBalcon: undefined,
      areaTotal: undefined,
      piso: undefined,
    },
    distribucion: {
      balcon: undefined,
      cuartos: undefined,
      banos: undefined,
      cuartoLavado: undefined,
    },
  },
  "estudio-411": {
    nombre: "Estudio 411",
    tipo: "Estudio",
    ubicacionImagen: "/ubicacion/411.webp",
    superficies: {
      area: undefined,
      areaBalconFrances: undefined,
      areaBalcon: undefined,
      areaTotal: undefined,
      piso: undefined,
    },
    distribucion: {
      balcon: undefined,
      cuartos: undefined,
      banos: undefined,
      cuartoLavado: undefined,
    },
  },
  "suite-606": {
    nombre: "Suite 606",
    tipo: "Suite",
    ubicacionImagen: "/ubicacion/606.webp",
    superficies: {
      area: 57.73,
      areaBalconFrances: 4.03,
      areaBalcon: 6.07,
      areaTotal: 67.83,
      piso: 6,
    },
    distribucion: {
      balcon: true,
      cuartos: 1,
      banos: 2,
      cuartoLavado: true,
    },
  },
  "suite-607": {
    nombre: "Suite 607",
    tipo: "Suite",
    ubicacionImagen: "/ubicacion/607.webp",
    superficies: {
      area: undefined,
      areaBalconFrances: undefined,
      areaBalcon: undefined,
      areaTotal: undefined,
      piso: undefined,
    },
    distribucion: {
      balcon: undefined,
      cuartos: undefined,
      banos: undefined,
      cuartoLavado: undefined,
    },
  },
  "departamento-510": {
    nombre: "Departamento 510",
    tipo: "Departamento",
    ubicacionImagen: "/ubicacion/510.webp",
    superficies: {
      area: undefined,
      areaBalconFrances: undefined,
      areaBalcon: undefined,
      areaTotal: undefined,
      piso: undefined,
    },
    distribucion: {
      balcon: undefined,
      cuartos: undefined,
      banos: undefined,
      cuartoLavado: undefined,
    },
  },
  "departamento-511": {
    nombre: "Departamento 511",
    tipo: "Departamento",
    ubicacionImagen: "/ubicacion/511.webp",
    superficies: {
      area: undefined,
      areaBalconFrances: undefined,
      areaBalcon: undefined,
      areaTotal: undefined,
      piso: undefined,
    },
    distribucion: {
      balcon: undefined,
      cuartos: undefined,
      banos: undefined,
      cuartoLavado: undefined,
    },
  },
  "departamento-605": {
    nombre: "Departamento 605",
    tipo: "Departamento",
    ubicacionImagen: "/ubicacion/605.webp",
    superficies: {
      area: undefined,
      areaBalconFrances: undefined,
      areaBalcon: undefined,
      areaTotal: undefined,
      piso: undefined,
    },
    distribucion: {
      balcon: undefined,
      cuartos: undefined,
      banos: undefined,
      cuartoLavado: undefined,
    },
  },
  "departamento-610": {
    nombre: "Departamento 610",
    tipo: "Departamento",
    ubicacionImagen: "/ubicacion/610.webp",
    superficies: {
      area: undefined,
      areaBalconFrances: undefined,
      areaBalcon: undefined,
      areaTotal: undefined,
      piso: undefined,
    },
    distribucion: {
      balcon: undefined,
      cuartos: undefined,
      banos: undefined,
      cuartoLavado: undefined,
    },
  },
};
