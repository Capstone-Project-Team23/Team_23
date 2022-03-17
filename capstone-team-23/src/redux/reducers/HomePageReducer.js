const selection = (who = "Customer", action) => {
    switch(action.type) {
        case "CUSTOMER": 
            who = "Customer"
            return who
            
        case "PROFESSIONAL": 
            who = "Professional"
            return who
        default :
            return who

    }
}

export default selection