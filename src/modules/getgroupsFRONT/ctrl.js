const { beginer } = require("../../lib/beginer")
const { getGroupsByMembers } = require("./model")

const groupsbymembers = async (req, res) => {

    try {
        if (getGroupsByMembers()) {
            
            return res.json({
                status: 200,
                message: 'data has been sended',
                data: await getGroupsByMembers()
            })
        } else {
            return res.json({
                status: 404,
                message: 'data han been not sended !'
            })
        }
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = {
    groupsbymembers
}