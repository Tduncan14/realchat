export const loginUser = async (req, res) => {

    try {
        const { fullName, username, password, confirmPassword, gender } = req.body


    }

    catch (err) {


    }

}


export const logout = (req, res) => {

    res.send('this logout sessions')
}

export const signup = (req, res) => {
    res.send('this is the signup')
}