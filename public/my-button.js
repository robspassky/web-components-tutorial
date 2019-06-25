const id = 'button_template'
const html = `<div class="my-button">
  <p class="my-button-name">I don't have a name</p>
  <p>I have not pressed the button</p>
  <button>Press me</button>
</div>
`

function create_template_if_it_does_not_exist() {
  if (!document.querySelector(`#${id}`)) {
    let x = document.createElement('template')
    x.id = id
    x.innerHTML = html
    document.body.appendChild(x)
  }
}

class MyButton extends HTMLElement {
  constructor() {
    super();
    create_template_if_it_does_not_exist()
    let copyOfTemplate = document
      .getElementById('button_template')
      .content
      .cloneNode(true)
    let shadowRoot = this.attachShadow({mode: 'open'}).appendChild(copyOfTemplate)
  }
}

export { MyButton }
