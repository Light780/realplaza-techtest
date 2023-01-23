interface Enviroment {
  VITE_API_URL: string
}

export const getEnviroments = (): Enviroment => {
  import.meta.env
  return {
    ...import.meta.env
  }
}
