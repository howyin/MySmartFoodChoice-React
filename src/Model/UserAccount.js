class UserAccount 
{
    constructor(email, password, profilePicture)
    {
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
    }

    get email()
    {
        return this.email;
    }


    set email(value)
    {
        this.email = value;
    }

    get password()
    {
        return this.password;
    }

    set password(value)
    {
        this.password = this.password;
    }
}

