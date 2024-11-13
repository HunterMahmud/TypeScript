// function with object 

// video:  57:33


// object type defined here 

type ObjType = (userInfo:{
    name: string;
    age: number;
    country: string;
    isMarried: boolean;
}) => void;

const getUserData : ObjType = (userInfo) => {
    console.log(userInfo);
}

getUserData({
    name: 'mahmud',
    age: 26,
    country: 'Bangladesh',
    isMarried: false
})