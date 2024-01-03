var users = [{username: "Amr", password: "8888"}];
function signup() 
{
    var user_name = document.getElementById("User Name").value;
    var password = document.getElementById("Password").value;
    var Phone = document.getElementById("Phone").value;
    var Age = document.getElementById("Age").value;
    var regix = /^(?=.*[-#$.%&@!+=\\*])(?=.*[a-zA-Z])(?=.*\d).{5,12}$/; 

    
    if (user_name == "" ) 
    {
        alert("Please fill in all fields.");
    }
    
    else if(user_name.length <5 || User_name.length>15)
    {
        document.getElementById('m1').innerHTML="Enter UserName Between 5 to 15";
    }
    else if(!password.match(regix))
    {
        document.getElementById('m2').innerHTML="Password Not Strong";
    }
    else if(password != Confirm_Password)
    {
        document.getElementById('m3').innerHTML="Password Not Match Confirm Password"
    }
    else
    {
        var bb = {User_name:user_name , password:password}
        console.log(bb);
        console.push(bb)
        alert("SigUp Successfully");
    }
}

function login()
{
    var user = document.getElementById('UserName').value
    var pass = document.getElementById('Password').value;
    if(user==""|| pass=="")
    {
      alert("Check Empty Fields")
    }
    else
    {
        for(let i=0; i<user.length;i++)
        {
            if(user==users[i].username && pass==user[i].password)
            {
                alert("Login Successfully");
            }
            else{
            alert("Login Field");
            }
        }
    }
}