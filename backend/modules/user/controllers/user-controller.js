export const userController={
    register(request , response){
        const body = request.body;
        console.log('body is',body);
        response.json({message:'Register'});
    },
    login(request , response){
        response.json({message:'Login'});

    },
    changePassword(request , response){
        response.json({message:'Change Password'});

    },
    profile(request , response){
        const userName = request.params.username;
        response.json({message:'profile'});

    },
    removeAccount(request , response){
        response.json({message:'Remove Account'});

    },
}