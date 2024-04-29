// Form preventDefault
        // const form = document.querySelector('form')
        // form.addEventListener('submit', function (event) {
        //     event.preventDefault()
        //     alert('abcd')
        //     //validarte if all input valid
        //     //all correct => submit form
        //     form.submit()
        //     // something incorrect => show error message to user
        // })

        // Ex.2 - 2. add method  on____
        // const button = document.querySelector('button')
        // button.onclick = function(){
        //     alert('Help Me')
        // }

        // Ex.3 - 3. el.addEventListerner 
        // ** Best practice **
        // const button = document.querySelector('button')
        // button.addEventListener('click', function(){
        //     alert('Help Me')
        // })

        // Ex.4 - กรณีมีหลาย fucntion จะต้องเรียกทุกอัน
        // const button = document.querySelector('button')
        // function click1() {
        //     alert('Click 1')
        // }
        // function click2() {
        //     alert('Click 2')
        // }
        // button.addEventListener('click', click1)
        // button.addEventListener('click', click2)
        // or
        // button.onclick = click1
        // button.onclick = click2 // จะเป็นการ repeat ค่า , มองว่า button เป็น obj จะทำแค่ตัวล่าสุด

        // Ex.4.1
        //Remove event Listener - ใช้กรณีที่ต้องการ remove 
        // button.addEventListener('click', click1)
        // button.addEventListener('click', click2)
        // setTimeout(() => {
        //     button.removeEventListener('click', click2)
        // }, 5000)//คลิกไปแล้ว รอ 5 วิ จะ remove function click2

        //this
        // const button = document.querySelector('button')
        // button.addEventListener('click',function(){
        //     console.log(this) // this => obj ที่เราไป by lister (button)
        // })
        // document.body.addEventListener('click',function(){
        //     console.log(this) //ถ้าคลิกที่ button จะได้ทั้ง button และ body
        // })

        // Ex.5
        // const list = document.querySelectorAll('li')
        // for (let li of list) {
        //     li.addEventListener('click', function () {
        //         console.log(this.dataset.name)
        //     })
        // }

        // Ex.6
        // const button = document.querySelector('button')
        // button.addEventListener('mousedown', function (event) {
        //     console.log(event)
        // })
        //try click body
        // document.body.addEventListener('click', function (event){
        //     console.log(event)
        // })

        // Ex.7 - Event Object
        // event - web browser จะบันทึกข้อมูลทุก event ที่เกิดขึ้นในรูปแบบของ object เรียกว่า event object
        // targert - the target element of the event
        // document.body.addEventListener('click',function(event){
        //     console.log(event.target.value)
        // })
        // const input = document.querySelector('input')
        // input.addEventListener('input', function (event) {
        // console.log('input changed')
        // console.log(this)
        // console.log(event.target.value)
        //compair targer and currentTarget
        //     console.log(event.target)
        //     console.log('----------------------')
        //     console.log(event.currentTarget)
        // })
        // ------------- keydown-preventDafault -------------
        // input.addEventListener('keydown',function(event){
        //     console.log(event)
        //     if(event.key !== event.key.toLocaleUpperCase){
        //         event.preventDefault()
        //     }
        // })

        // Ex.8 - Event : prevent Default
        // const aTag = document.querySelector('a')
        // aTag.addEventListener('click', function (event) {
        //     event.preventDefault()
        //     alert('You connot leave')
        // })

        //Ex.9
        // outer.addEventListener('click', function () {
        //     console.log('outer')
        // })
        // middle.addEventListener('click', function (event) {
        //     console.log('middle')
        //     event.stopPropagation() // หยุดไม่ให้ไปหาตัวที่อยู่ชั้นขึ้นไป (outer) div => outer - middle - inner  (Bubbling)
        // })
        // inner.addEventListener('click', function () {
        //     console.log('inner')
        // })

        // Ex.10
        const input = document.querySelector('input')
        const image = document.querySelector('img')
        image.addEventListener('click',function(){
            // alert('image clicked')
            input.click()
        })