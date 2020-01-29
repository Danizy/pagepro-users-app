import React from 'react'
import styled from 'styled-components'

const ModalWrapperStyles = styled.div`
  margin: 0 auto;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`

const ModalContainer = styled.div`
  background-color: white;
  width: 500px;
  border: 3px solid black;
  display: flex;
  flex-direction: column;
`

const ModalHeader = styled.div`
  display: block;
  border-bottom: 3px solid black;
  padding: 5px 10px;
`

const ModalContent = styled.div`
  flex: 1;
`

const ModalFooter = styled.div`
  height: 20px;
  border-top: 3px solid black;
`

type ModalProps = {
  modalTitle: string
}

const ModalWrapper: React.FC<ModalProps> = props => {
  return (
    <ModalWrapperStyles>
      <ModalContainer>
        <ModalHeader>{props.modalTitle}</ModalHeader>
        <ModalContent>{props.children}</ModalContent>
        <ModalFooter></ModalFooter>
      </ModalContainer>
    </ModalWrapperStyles>
  )
}

export default ModalWrapper
