AFRAME.registerComponent('createButtons',{
    init:async function(){
        var button1 = document.createElement('button');
        button1.innerHTML = 'Order Now';
        button1.setAttribute('id','order-button');
        button1.setAttribute('class','btn btn-danger ml-3 mr-3');
        var button2 = document.createElement('button');
        button2.innerHTML = 'Order Now';
        button2.setAttribute('id','order-summary-button');
        button2.setAttribute('class','btn btn-danger ml-3');
        var buttonDiv = document.getElementById('button-div');
        buttonDiv.appendChild(button2);
        buttonDiv.appendChild(button1);
    },
    button1:function(){
        var buttonDiv = document.getElementById('button-div')
        buttonDiv.style.display = 'flex'
        var ratingButton = document.getElementById('rating-button')
        var orderButton = document.getElementById('order-button')
        ratingButton.addEventListener('click',function(){
            swal({
                icon:'warning',
                title:'rate dish',
                text:'work in progress'
            })
        })
        orderButton.addEventListener('click',function(){
            swal({
                icon:'https://imgur.com/4NZ6uLY',
                title:'Thanks For Your Order',
                text:'Your Order Will Be Served Soon'
            })
        })
    },
    button2:function(){
        var buttonDiv = document.getElementById('button-div')
        buttonDiv.style.display = 'none'
    }
})