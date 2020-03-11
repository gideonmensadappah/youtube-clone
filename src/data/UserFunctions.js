import axios from 'axios';

export const signup = newUser => {
    return axios 
    .post('/users/signup', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password,
        phone:newUser.phone
        
    }).then(res=>{
        console.log("Registered")
    })
}


export const signin = user => {
    return axios
    .post('/users/signin', {
        email: user.email,
        password: user.password
     }).then(res =>{
       
        localStorage.setItem('usertoken', res.data.token);
      
       console.log(res.data)
        console.log("Logged in");

        return res.data.token;
        // return res;
    }).catch(err =>{
        console.log(err)
    })
}
//Edit profile
export const editProfile = editProfile => {
    return axios
    .put('/users/update/:id', {
        first_name: editProfile.first_name,
        last_name:  editProfile.last_name,
        email:      editProfile.email,
        password:   editProfile.password,
        phone:      editProfile.phone

       
    }).then(res =>{
      console.log(res.data)
        console.log('updated !!');
    
    }).catch(err => {
        console.log(err);
    })
}

// User Info
export const userInfo = userInfo => {
    return axios 
    .get('/users/profile')
    .then(res => {
      console.log(res)
       
    })
    .catch(err => {
        console.log( {error:err})
    })
}

//Add video
export const addVid = addvideo => {
    return axios
    .post('/videos/add/video',{
        title:addvideo.title,
        video:addvideo.video,
        uploader_id:addvideo.uploader_id
    })
    .then(res => {
        console.log('added new video !!!')
        return res
    })
    .catch(error => {
        console.log('there is an error!!!')
        return error
    })
}

// All videos by id

export const getAllVideos = userId => {
 
    return axios
    .get(`/videos/myVideos/${userId}`).then(data => {
      
        const _dt = data.data;
    
      return _dt
    }).catch(error => {
        return error
    })
} 

export const allVideos = all => {
    return axios
    .get('videos/all/videos')
    .then(videos => videos)
    .catch(err => console.log(err))
}
