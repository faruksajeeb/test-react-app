const Temperature = ({ temperature }) => {
    let msg;
    if (temperature > 30) {
        msg = "It's hot!";
    } else if(temperature < 20){
        msg = "It's cool";
    }
    return (
        <p>{msg}</p>
    );
};

export default Temperature;