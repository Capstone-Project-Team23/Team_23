const chooseService = (service = "", action) => {
    switch(action.type) {
        case "Grass Cutting": 
            service = "Grass Cutting"
            return service
        case "Plumbing": 
            service = "Plumbing"
            return service
        case "Home Cleaning": 
            service = "Home Cleaning"
            return service
        case "Window Cleaning": 
            service = "Window Cleaning"
            return service
        case "Electrical Service": 
            service = "Electrical Service"
            return service
        case "Pest Control": 
            service = "Pest Control"
            return service
        case "Laundry": 
            service = "Laundry"
            return service
        case "Welding": 
            service = "Welding"
            return service
        case "Home Repairs": 
            service = "Home Repairs"
            return service
        case "Landscapping": 
            service = "Landscapping"
            return service
        case "General Construction": 
            service = "General Construction"
            return service
        default :
            return service

    }
}

export default chooseService