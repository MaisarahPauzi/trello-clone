<template>
    <div class="flex-center position-ref full-height">
        <div class="content">
            <div  class="m-b-md">
                <h2 class="title m-b-md">
                    Trello Clone
                </h2>
                <h3>
                    Drag and Drop Task Planner
                </h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        let token = localStorage.getItem('token')
        let name  = localStorage.getItem('user')

        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
        axios.get('api/details')
                .then(response => {

                console.log(response)
                localStorage.setItem('user',response.data.success.name)
                console.log(response.data.success.name)
            

                
                })
                .catch(function (error) {
                console.error(error);
                });
        }
}
</script>

<style scoped>
.full-height {
    height: 100vh;
}
.flex-center {
    align-items: center;
    display: flex;
    justify-content: center;
}
.position-ref {
    position: relative;
}
.top-right {
    position: absolute;
    right: 10px;
    top: 18px;
}
.content {
    text-align: center;
}
.title {
    font-size: 60px;
}
.links > a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
}
.m-b-md {
    margin-bottom: 30px;
    color: #000000;
}
</style>