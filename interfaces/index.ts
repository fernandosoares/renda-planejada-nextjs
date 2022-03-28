export interface IFormState {
  email: string
  income: number
}

export interface ICustomInputProps {
  onChange: (event: { target: { name: string; value: number } }) => void
  name: string
}
