export interface IFormState {
  email: string
  income: string
}

export interface ICustomInputProps {
  onChange: (event: { target: { name: string; value: number } }) => void
  name: string
}
