import '@testing-library/jest-dom'

jest.mock('./src/helpers/getEnviroments', () => ({
  getEnviroments: () => ({ ...process.env })
}))
