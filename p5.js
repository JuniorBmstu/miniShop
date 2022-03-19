        var sum = 0;
        dynamictable.addEventListener('mouseout', mouseoo);
        dynamictable.addEventListener('mouseover', mouseoo);
        function mouseoo(event) 
        {
            if (event.type == 'mouseover') {
                event.target.parentElement.children[1].style.background = 'rgb(115, 228, 130)';
            }
            if (event.type == 'mouseout') {
                event.target.parentElement.children[1].style.background = 'rgb(245, 215, 135)';
            }
        }
        choosetable.addEventListener('mousedown', checkclick);
        choosetable.addEventListener('mouseup', checkclick);
        function checkclick(event)
        {
            if (event.type == 'mousedown') 
            {
                event.target.parentElement.children[0].style.background = 'rgb(115, 228, 130)';
                event.target.parentElement.children[1].style.background = 'rgb(115, 228, 130)';
                Addtr(event.target.parentElement.children[0].outerText, event.target.parentElement.children[1].outerText);
            }
            if (event.type == 'mouseup')
            {
                event.target.parentElement.children[0].style.background = 'rgb(245, 215, 135)';
                event.target.parentElement.children[1].style.background = 'rgb(245, 215, 135)';
            }
        }
        function check(event)
        {
            if(event.type == 'mousedown')
            {
                event.target.style.background = 'rgb(115, 228, 130)';
            }
            if(document.getElementById("fname").value != '' && document.getElementById("price").value != '' )
            {
                Addtr(document.getElementById('fname').value, document.getElementById('price').value);
                document.getElementById("fname").value = '';
                document.getElementById("price").value = '';
            }
            if(event.type == 'mouseup')
            {
                event.target.style.background = 'rgb(119, 119, 240)';
            }
        }
        function Addtr(name, price)
        {
                sum += parseFloat(price);
                let i = 0;
                let flag = true;
                while(i < document.getElementById("dynamictable").children.length)
                {
                    if(document.getElementById("dynamictable").children[i].children[0].outerText == name)
                    {    
                        let temp = parseFloat(document.getElementById("dynamictable").children[i].children[2].outerText);
                        temp++;
                        document.getElementById("dynamictable").children[i].children[2].innerHTML = temp;
                        flag =! flag;
                    }
                    i++;
                }
                if(flag)
                    document.getElementById("dynamictable").innerHTML += '<div class="myrow-3"> <div class="mycol">' 
                    + name + '</div><div class="mycol">'
                    + price + '</div><div class="mycol">1</div></div>';

        } 
        function Caclulate(event)
        {
            if(event.type == 'mousedown')
            {
                document.getElementById('output').value = sum.toFixed(2);
                event.target.style.background = 'rgb(115, 228, 130)';
            }
            if(event.type == 'mouseup')
            {
                event.target.style.background = 'rgb(119, 119, 240)';
            }
        }