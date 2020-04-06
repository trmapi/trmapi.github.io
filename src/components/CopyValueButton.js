import React from 'react'
import styled from 'styled-components/macro'

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  font-size: 1rem;
  padding: ${({ copied }) => (copied ? '0.35em 0 0.5em' : '0.5em 0 0.35em')};
  width: 100%;
  max-width: 280px;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
  &.table {
    padding: ${({ copied }) =>
      copied ? '0.35em 0 0.55em' : '0.75em 0 0.25em'};
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    @media screen and (min-width: ${({ theme }) => theme.maxWidth}) {
      padding: ${({ copied }) =>
        copied ? '0.25em 0 0.35em' : '0.5em 0 0.25em'};
      min-width: 145px;
      border-radius: 4px;
    }
    font-size: 0.85em;
    .text {
      display: none;
      @media screen and (min-width: ${({ theme }) => theme.maxWidth}) {
        display: inline;
      }
    }
  }
  .text {
    margin-left: 0.5em;
  }
  > span {
    pointer-events: none;
  }
`

const CopyValueButton = props => (
  <Button
    className={props.className}
    onClick={props.onClick}
    copied={props.copied}
  >
    <span className="img" role="img" aria-label="copy-value">
      {props.copied ? '👍' : '⧉'}
    </span>
    <span className="text">
      {props.copied ? 'Valor copiado' : 'Copiar valor'}
    </span>
  </Button>
)

export default CopyValueButton