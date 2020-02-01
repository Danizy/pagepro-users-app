import React, { useState } from 'react'
import styled from 'styled-components'
import ModalWrapper from './ModalWrapper'
import Button from './Button'
import mainTheme from '../constants/theme'

const AddPostWrapper = styled.div`
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  height: 400px;
`

const AddPostTitle = styled.h1`
  text-align: center;
`

const StyledInput = styled.input`
  flex: 1;
  height: 15px;
  border: ${mainTheme.border};
`

const LabelText = styled.span`
  width: 50px;
  display: inline-block;
`

const TitleLabel = styled.div`
  display: flex;
  margin-bottom: 15px;
`

const BodyLabel = styled.div`
  display: flex;
  height: 100%;
  padding-bottom: 30px;
`

const StyledTextarea = styled.textarea`
  flex: 1;
  height: 100%;
  border: ${mainTheme.border};
`

const ButtonContainer = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
`

const StyledButton = styled(Button)`
  margin-right: 20px;
`

type AddPostModalProps = {
  onCancel: () => void
  onSave: (title: string, body: string) => void
}

const AddPostModal: React.FC<AddPostModalProps> = ({ onCancel, onSave }) => {
  const [titleText, setTitleText] = useState('')
  const [bodyText, setBodyText] = useState('')

  const handleTitleTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => setTitleText(event.target.value)

  const handleBodyTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => setBodyText(event.target.value)

  const handleSaveClicl = (): void => {
    if (titleText.trim() === '') {
      window.alert('Please add title')
      return
    }
    if (bodyText.trim() === '') {
      window.alert('Please add body')
      return
    }

    onSave(titleText, bodyText)
  }

  return (
    <ModalWrapper modalTitle="Add post">
      <AddPostWrapper>
        <AddPostTitle>Add post</AddPostTitle>
        <TitleLabel>
          <LabelText>Title</LabelText>{' '}
          <StyledInput value={titleText} onChange={handleTitleTextChange} />
        </TitleLabel>
        <BodyLabel>
          <LabelText>Body</LabelText>{' '}
          <StyledTextarea value={bodyText} onChange={handleBodyTextChange} />
        </BodyLabel>
        <ButtonContainer>
          <StyledButton onClick={onCancel}>Cancel</StyledButton>
          <Button secondary onClick={handleSaveClicl}>
            Save
          </Button>
        </ButtonContainer>
      </AddPostWrapper>
    </ModalWrapper>
  )
}

export default AddPostModal
