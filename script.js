let basic_plus = document.querySelector('.basic_plus')
let basic_minus = document.querySelector('.basic_minus')
let basic_rate = document.querySelector('.rate_basic')
let basic_room = document.querySelector('.basic_line_2')
let basic_signUp = document.querySelector('.basic_sign_up_btn')
let basic_text = document.querySelector('.basic_text')
let b_rate = 199
let b_room = 1
basic_rate.innerHTML = ` $ ${b_rate}`
basic_room.innerHTML = `${b_room} room`



let pro_plus = document.querySelector('.pro_plus')
let pro_minus = document.querySelector('.pro_minus')
let pro_rate = document.querySelector('.rate_pro')
let pro_room = document.querySelector('.pro_line_2')
let pro_signUp = document.querySelector('.pro_signUp')
let pro_text = document.querySelector('.pro_text')
let p_rate = 249
let p_room = 1
pro_rate.innerHTML = ` $ ${p_rate}`
pro_room.innerHTML = `${p_room} room`


// bacic 
basic_minus.addEventListener('click',()=>{
    b_room -- 
    basic_rate.innerHTML = ` $ ${b_room*b_rate}`
    basic_room.innerHTML = `${b_room} room`
})
basic_plus.addEventListener('click',()=>{
    b_room ++
    basic_rate.innerHTML = ` $ ${b_room*b_rate}`
    basic_room.innerHTML = `${b_room} room`
})

basic_signUp.addEventListener('click',()=>{
    basic_text.innerHTML = `Thank You for choosing ${b_room} room`
})


// pro 
pro_minus.addEventListener('click',()=>{
    p_room -- 
    pro_rate.innerHTML = ` $ ${p_room*p_rate}`
    pro_room.innerHTML = `${p_room} room`
})
pro_plus.addEventListener('click',()=>{
    p_room ++
    pro_rate.innerHTML = ` $ ${p_room*p_rate}`
    pro_room.innerHTML = `${p_room} room`
})

pro_signUp.addEventListener('click',()=>{
    console.log('hi');
    pro_text.innerHTML = `Thank You for choosing ${p_room} room`
})