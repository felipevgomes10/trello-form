import { useCallback, useState } from 'react'

const types = {
  name: {
    min: 4,
    message: 'Preencha pelo menos 4 caracteres'
  },
  date: {
    min: 10,
    message: 'Preencha uma data válida'
  },
  description: {
    min: 5,
    message: 'Preencha pelo menos 5 caracteres'
  },
  list: {
    min: 1,
    message: 'Escolha um tipo de lista'
  }
}

const useForm = type => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  const validate = useCallback(
    value => {
      if (types[type] && value.length < types[type].min) {
        setError(types[type].message)
        return false
      } else {
        setError(null)
        return true
      }
    },
    [type]
  )

  const onChange = useCallback(
    ({ target }) => {
      setValue(target.value)
      if (error) validate(target.value)
    },
    [error, validate]
  )

  const onBlur = useCallback(
    ({ target }) => {
      validate(target.value)
    },
    [validate]
  )

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur,
    validate: () => validate(value)
  }
}

export default useForm
