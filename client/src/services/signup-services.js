import axios from "axios";


const API_URL = "http://localhost:3001/api/user";




const signup = async (name, lastName, email, password) => {

    try {
        const newUser = await axios.post(API_URL + '/signup', {
            name,
            lastName,
            email,
            password
        });
        console.log(newUser);

    } catch (error) {
        console.error(error);
    }


}


const signupService = {
    signup
}

export default signupService;