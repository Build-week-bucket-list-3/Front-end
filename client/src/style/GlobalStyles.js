import Styled from "styled-components";
import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Exo:500&display=swap');
    html {
        font-size: 100%;
        box-sizing: border-box;
        overflow-y: scroll;
    }
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    * {
        min-height: 0;
        min-width: 0;
    }
    body {
        font-size: 1rem;
        line-height: 1.6;
        color: #111;
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Exo', sans-serif;
        font-weight: 500;
        margin: 0;
    }
    p {
        padding: 0;
        margin: 0;
    }
    a {
        color: #027fa7;
        text-decoration: none;
    }
    img {
        max-width: 100%;
        height: auto;
    }
    ul, li {
        margin: 0;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }
    button,
    input {
        overflow: visible;
    }
    button,
    select {
        text-transform: none;
    }
    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
        -webkit-appearance: button;
    }

/* Global Styles */
    .container {
        max-width: 682px;
        margin: 2rem auto 0;
        padding-left: 1rem;
        padding-right: 1rem;
    }

/* Header */
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #027FA7;
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);
        padding-left: .5rem;
        padding-right: .5rem;
    }
    .navbar-brand {
        font-size: 2rem;
        white-space: nowrap;
        color: #fff;
    }
    .nav-link {
        padding-right: .75rem;
        padding-left: .75rem;
        color: #ddf8ff;
    }
    .nav-link:hover {
        color: #fff;
    }
    .nav-link.active {
        font-weight: 600;
    }
    .nav-signout {
        color: #ddf8ff;
    }
    .nav-signout::before {
        content: url(test.svg);
        width: 26px;
        height: 26px;
    }

/* Forms */
    .form-control {
        display: block;
        width: 100%;
        height: calc(1.5em + .75rem + 2px);
        padding: .375rem .75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .form-control:focus {
        border-color: #676767;
    }
    .form-group {
        margin-bottom: 1rem;
    }
    label {
        display: inline-block;
        margin-bottom: .5rem;
    }
    .form-check {
        position: relative;
        display: block;
        padding-left: 1.25rem;
    }
    .form-check-input {
        position: absolute;
        margin-top: .3rem;
        margin-left: -1.25rem;
    }
    .form-check-label {
        margin-bottom: 0;
    }
    textarea.form-control {
        min-height: 150px;
    }

/* Buttons */
    .btn {
        display: inline-block;
        font-weight: 400;
        color: #212529;
        text-align: center;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-color: transparent;
        border: 1px solid transparent;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
        padding: .375rem .75rem;
        margin-bottom: 1rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .btn:hover {
        color: #212529;
        text-decoration: none;

    }
    .btn-primary {
        color: #fff;
        background-color: #027FA7;
        border-color: #027FA7;
    }
    .btn-primary:hover {
        color: #fff;
        background-color: #00a3d8;
        border-color: #009bcd;
    }
    .btn-secondary {
        color: #027FA7;
        border: 1px solid #027FA7;

    }
    .btn-secondary:hover {
        color: #fff;
        background-color: #00a3d8;
        border-color: #009bcd;
    }
    .btn-block {
        width: 100%;
    }
    .text-center {
        text-align:center;
        margin-bottom:.5rem;
    }
`;


export const Blheader = Styled.div`

    text-align:center;
    h2{
        margin-bottom: 1rem;
    }
`;

export const ListContainer = Styled.div`
    display:flex;
    justify-content:space-around;
    align-content:center;
    flex-wrap:wrap;
    margin: 0 auto;
    
    

`;

export const Card = Styled.div`
    width: 45%;
    background-color:#FAFAFA;
    color:#333;
    margin:1.8rem 0;
    box-shadow:0 .2rem .5rem rgba(000,000,000,0.2);
    .card-img-top{
        padding:0;
    }
    
    a {
        color:inherit;
     }
     p,h3,img{
        padding: .5rem 1rem;  
     }
`;