import { html, render } from 'lit-html'

const links = ({ email }) =>
  html`
    <div class="links mt-5">
      <!-- <div class="row">
        <div class="col-2 flex-center-both">
          <img
            class="avatar"
            src="https://avatars1.githubusercontent.com/u/25515080?s=400&u=f7e97dcd06409a3037d1481d38631861e9709562&v=4"
          />
        </div>
        <div class="col-10">
          <div class="px-4">
            <h1 class="mb-0">${name}</h1>
            <h3 class="title my-3">${title}</h3>
            <p>${description}</p>
          </div>
        </div>
      </div> -->
    </div>
  `

export default links
