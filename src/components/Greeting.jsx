const Greeting = ({ isGreeting }) => {
    return (
        <div>{isGreeting ? <p>Hello, World</p> : <p>Goodbye</p>}</div>
    );
};
export default Greeting;