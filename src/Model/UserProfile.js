class UserProfile 
{
    constructor(firstName = '', lastName = '', height = '', weight = '', profileImageUrl = '', gender = '', age = 0, dob = '') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.height = height;
        this.weight = weight;
        this.profileImageUrl = profileImageUrl;
        this.gender = gender;
        this.age = age;
        this.dob = dob;
    }

    // Method to serialize the object to JSON
    toJSON() 
    {
        return{
            firstName: this.firstName,
            lastName: this.lastName,
            height: this.height,
            weight: this.weight,
            profileImageUrl: this.profileImageUrl,
            gender: this.gender,
            age: this.age,
            dob: this.dob
        };
    }

    // Getters and Setters
    getProfileImageUrl() 
    {
        return this.profileImageUrl;
    }

    setProfileImageUrl(profileImageUrl)
    {
        this.profileImageUrl = profileImageUrl;
    }

    getFirstName() {
        return this.firstName;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    getLastName() {
        return this.lastName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    getHeight() {
        return this.height;
    }

    setHeight(height) {
        this.height = height;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getGender() {
        return this.gender;
    }

    setGender(gender) {
        this.gender = gender;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getDob() {
        return this.dob;
    }

    setDob(dob) {
        this.dob = dob;
    }

    // toString method
    toString() {
        return `UserProfile{firstName='${this.firstName}', lastName='${this.lastName}', height='${this.height}', weight='${this.weight}', profileImage='${this.profileImageUrl}', gender='${this.gender}', age=${this.age}, dob='${this.dob}'}`;
    }
}
