# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

   A stateful component has state that gets initialized in the constructor of a class component. It stores information about the component's state change in memory. There is access to component lifecycle methods and hooks in stateful classes (as well as stateless classes). Stateful components can render both props and state. Stateful components can use the 'this' keyword like this.setState. Props and state are rendered like {this.props.name} and {this.state.name}. Render depends on the value of the state.

   A functional component is always a stateless component having no state at all. It has no lifecycle and it can only render props. Props are displayed {props.name}. Render depends upon props value.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

   The componentWillMount function is executed before rendering on both the server and client side ( componentDidMount is executed after the first render only on the client side.).

   The componentWillUpdate function is called just before rendering.

3. Define stateful logic.

   Stateful logic is any code that deals with state in a component. It is logic that is built into a component and related to the manipulation or creation of data. In regards to hooks stateful logic is the behavior created with the use of one or more hooks. An example is a function that sets a toggle state.

4. What are the three step of creating a successful test? What is done in each phase?

   The three steps of creating a successful test are Arrange, Act, and Assert.

   Arrange: App is in an original state. The render method renders a React element into a virtual DOM. Arrange is basically where we set ourselves up for success.

   Act: This is where something happens such as a click event, input, or some other action. For example in the Act phase we can set something up to render and then in the Act phase we test that it is being rendered by the component we have it in.

   Assert: This is where we are testing or making a hypothesis of the new state of our app. This is where we test that the something from the Arrange and Act did indeed actually get rendered. The tests will pass if our hypothesis is correct and fail if it is wrong.
