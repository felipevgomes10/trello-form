import React, { useCallback } from 'react'
import { getApiParams } from '../api'
import PageForm from '../components/Form/PageForm/PageForm'
import PropTypes from 'prop-types'
import Input from '../components/Form/Input/Input'
import Select from '../components/Form/Select/Select'
import Textarea from '../components/Form/Textarea/Textarea'
import Button from '../components/Form/Button/Button'
import useForm from '../hooks/useForm'

const Home = ({ lists }) => {
  const name = useForm('name')
  const date = useForm('date')
  const description = useForm('description')
  const list = useForm('list')

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      const validation =
        name.validate() &&
        date.validate() &&
        description.validate() &&
        list.validate()

      if (validation) {
        console.log('enviou')
      } else {
        console.log('não enviou')
      }
    },
    [date, description, list, name]
  )

  return (
    <PageForm onSubmit={handleSubmit}>
      <div>
        <Input
          id="cardName"
          name="cardName"
          label="Nome do card"
          type="text"
          placeholder="Ex: tarefas"
          value={name.value}
          onChange={name.onChange}
          onBlur={name.onBlur}
          error={name.error}
          required
        />
        <Input
          id="date"
          name="date"
          label="Data de entrega"
          type="date"
          value={date.value}
          onChange={date.onChange}
          onBlur={date.onBlur}
          error={date.error}
          required
        />
        <Select
          id="lists"
          name="lists"
          label="Lista"
          value={list.value}
          onChange={list.onChange}
          onBlur={list.onBlur}
          error={list.error}
          required
        >
          {lists.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <Textarea
          id="description"
          label="Descrição"
          placeholder="Escreva aqui..."
          value={description.value}
          onChange={description.onChange}
          onBlur={description.onBlur}
          error={description.error}
          required
        />
        <Button />
      </div>
    </PageForm>
  )
}

export const getStaticProps = async () => {
  const { baseUrl, key, token, boardId } = getApiParams()
  const response = await fetch(
    `${baseUrl}/boards/${boardId}/lists?key=${key}&token=${token}`
  )
  const data = await response.json()

  return {
    props: {
      lists: data
    },
    revalidate: 1
  }
}

export default Home

Home.propTypes = {
  lists: PropTypes.array
}
