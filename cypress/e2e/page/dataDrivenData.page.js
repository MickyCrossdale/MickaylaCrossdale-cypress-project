module.exports=
    [
        {
            username: "standard_user",
            password: "secret_sauce",
            expectedUrl: "https://www.saucedemo.com/inventory.html"

        },

        {
            username:"locked_out_user",
            password:"secret_sauce",
            message:"Epic sadface: Sorry, this user has been locked out.",
            expectedUrl:"https://www.saucedemo.com/"
        },


    ]