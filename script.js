const $content=document.getElementById('texto'),
        $btn=document.getElementById('btn'),
        $content1=document.getElementById('texto1'),
        $btn1=document.getElementById('btn1'),
        $content2=document.getElementById('texto2'),
        $btn2=document.getElementById('btn2'),
        $content3=document.getElementById('texto3'),
        $btn3=document.getElementById('btn3'),
        
        $title=document.getElementById('title');

        $btn.addEventListener('click',e=>{
            $content.select();
            document.execCommand('copy');
        $title.innerHTML='COPIADO CUENTA!!!'
        });
        $btn1.addEventListener('click',e=>{
            $content1.select();
            document.execCommand('copy');
        $title.innerHTML='COPIADA # TARJETA!!!'
        });
        $btn2.addEventListener('click',e=>{
            $content2.select();
            document.execCommand('copy');
        $title.innerHTML='COPIADA CLABE!!!'
        });
        $btn3.addEventListener('click',e=>{
            $content3.select();
            document.execCommand('copy');
        $title.innerHTML='COPIADO NOMBRE!!!'
        })