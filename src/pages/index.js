import React, { useCallback, useRef } from 'react'
import { getApiParams } from '../api'
import PageForm from '../components/Form/PageForm/PageForm'
import PropTypes from 'prop-types'
import Input from '../components/Form/Input/Input'
import Select from '../components/Form/Select/Select'
import Textarea from '../components/Form/Textarea/Textarea'
import Button from '../components/Form/Button/Button'
import useForm from '../hooks/useForm'
import ErrorText from '../components/Form/Helpers/Error/ErrorText'
import { useDispatch, useSelector } from 'react-redux'
import { createCard, fetchSuccess } from '../redux/reducers/card'
import SuccessModal from '../components/Form/Modal/SuccessModal'
import {
  closeSuccessModal,
  openSuccessModal
} from '../redux/reducers/successModal'

const Home = ({ lists }) => {
  const name = useForm('name')
  const date = useForm('date')
  const description = useForm('description')
  const list = useForm('list')

  const { card, successModal } = useSelector(state => state)
  const dispatch = useDispatch()

  const nameInput = useRef(null)
  const doneList = lists.filter(list => list.name === 'Done')

  const resetFormValues = useCallback(() => {
    name.setValue('')
    date.setValue('')
    description.setValue('')
    list.setValue('')
    nameInput.current.focus()
  }, [date, description, list, name])

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault()
      const validation =
        name.validate() &&
        date.validate() &&
        description.validate() &&
        list.validate()

      if (validation) {
        const { baseUrl, key, token } = getApiParams()
        const url = `${baseUrl}/cards?key=${key}&token=${token}&idList=${
          list.value
        }&name=${name.value}&desc=${description.value}&due=${
          date.value
        }&dueComplete=${list.value === doneList[0].id}`

        const result = await dispatch(createCard(url))

        if (result.type === fetchSuccess.type) {
          resetFormValues()
          dispatch(openSuccessModal())
          setTimeout(() => {
            dispatch(closeSuccessModal())
          }, 2000)
        }
      }
    },
    [name, date, description, list, doneList, dispatch, resetFormValues]
  )

  return (
    <>
      <PageForm onSubmit={handleSubmit}>
        <div>
          <Input
            ref={nameInput}
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
            ElementHeight={description.error && '13.5rem'}
            required
          />
          {card.loading ? <Button disabled /> : <Button />}
          {card.error && <ErrorText text={card.error} />}
        </div>
      </PageForm>
      {successModal.open && <SuccessModal />}
    </>
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
