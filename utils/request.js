const API_KEY=process.env.API_KEY
// console.log(API_KEY);
export default{
    fetchHome:{
        title:'Home',
        url:'/'
    },
    fetchStandUp:{
        title:'Stand-Up',
        url:`/standup`
    },
    fetchComedians:{
        title:'Comedians',
        url:`comedian?postId=${API_KEY }`
    },
    fetchMemes:{
        title:'Memes',
        url:`/meme`
    },
    fetchCrowdWork:{
        title:'Crowd Work',
        url:`/croudwork`
    },
}