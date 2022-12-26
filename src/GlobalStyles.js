import { createGlobalStyle } from 'styled-components'
import yellowBlob from './img/blob_yellow.svg'
import blueBlob from './img/blob_blue.svg'

export default createGlobalStyle`
  html {
    font-size: 10px;
  }

  html,
  body {
    height: 100%;
    margin: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.05rem;
    font-size: 1.6rem;
    color: #293264;
    background-color: #F5F7FB;
    background: url(${yellowBlob}) right top no-repeat, url(${blueBlob}) left bottom no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Karla', sans-serif !important;
    font-weight: 500;
  }

  h1 {
    font-size: 3.1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  p {
    font-size: 1.6rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  button {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    background-color: #4D5B9E;
    color: #fff;
    padding: 1.6rem 5rem;
    border: none;
    border-radius: 15px;
    margin-top: 2rem;

    &:hover {
      background-color: #6c7cc7;
      cursor: pointer;
    }
  }

  hr {
    margin-top: 2rem;
  }

  main {
    width: 550px;
  }
`
