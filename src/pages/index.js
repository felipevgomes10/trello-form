import React from 'react'
import { getApiParams } from '../api'
import PageForm from '../components/Form/PageForm/PageForm'
import PropTypes from 'prop-types'
import Input from '../components/Form/Input/Input'
import Select from '../components/Form/Select/Select'
import Textarea from '../components/Form/Textarea/Textarea'
import Button from '../components/Form/Button/Button'

const Home = ({ lists }) => {
  return (
    <PageForm>
      <div>
        <Input
          id="cardName"
          name="cardName"
          label="Nome do card"
          type="text"
          placeholder="Ex: tarefas"
        />
        <Input id="date" name="date" label="Data de entrega" type="date" />
        <Select id="lists" name="lists" label="Lista">
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
