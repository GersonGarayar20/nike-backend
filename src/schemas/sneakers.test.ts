import { describe, test, expect } from 'vitest'

import { validateSneaker } from './sneakers'

describe('probando validaciones con valibot', () => {
  test('validar entrada de zapatillas', () => {
    const entrada = {
      name: 'hola'
    }

    const result = validateSneaker(entrada)

    expect(result.success).toBe(true)
  })
})
