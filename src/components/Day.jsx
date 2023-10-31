const Day = ({dayOfWeek}) => {
    let msg; 
    switch(dayOfWeek){
        case 'Monday':
            msg = "It's Monday!";
            break;
        case '':
            msg = "It's Friday!";
            break;
        default :
            msg = "It's a weekday!"
    }
    return (
        <div>
             <p>{msg}</p>
        </div>
    );
};

export default Day;