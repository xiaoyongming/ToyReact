import { ToyReact, Component } from './ToyReact.js'

class MyComponent extends Component {
    render() {
        return <div>
            <span>cool</span>
            <div>{true}{this.children}</div>
        </div>
    }

}

let a = <MyComponent name="a" id="111">
    <div>123</div>
</MyComponent>

ToyReact.render(
    a,
    document.body
)