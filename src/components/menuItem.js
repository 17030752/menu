export default {
    profile:
    {
        name:'David G',
        image:'profile.jpg',
        onClick()
        {
            console.log('hola');
        }
    },
    items:[
        {
            id:0,
            title:'home',
            icon:'fa-house-user',
            onClick(){
                console.log('Home');
            }
        },
        {
            id:1,
            title:'Reports',
            icon:'fa-screwdriver-wrench',
            onClick(){
                console.log('Reports');
            }
        },
        {
            id:2,
            title:'About',
            icon:'fa-fire',
            onClick(){
                console.log('About');
            }
        },
    ],
}