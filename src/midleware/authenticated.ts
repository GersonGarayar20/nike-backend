import { Request, Response, NextFunction } from 'express'

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['api-key'] // Obtener la API key de los headers

  // Verificar si la API key es válida
  const validApiKey = 'myapikey' // Cambia esto con tu API key válida

  if (apiKey === validApiKey) {
    next()
  } else {
    res.status(401).send('API key no válida')
  }
}
