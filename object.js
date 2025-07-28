const formData = {
  name: "ram",
  email: "ram@gmail.com",
  age: 25
};

const googleData = {
  email: "saideep@gmail.com", // More updated email
  profilePic: "https://example.com/profile.jpg",
  googleId: "123456789"
};


const completeUserProfile = Object.assign(formData, googleData)

console.log(completeUserProfile);
