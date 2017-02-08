/**
 * Created by shenyj on 17/2/8.
 */

// DOM的CRUD

// c 创建create

    // 1.
    document.write('hello world!');
    document.write('<img src="../images/icon_01.png">');
    // 2.
    var div = document.createElement('div');
    div.style.backgroundColor = 'red';
    div.style.width = '500px';
    div.style.height = '300px';
    // 添加到父级标签
    document.body.appendChild(div);

    // 往div中插入一张图片
    var img = document.createElement('img');
    img.src = '../images/icon_02.png';
    div.appendChild(img);

    // 获取到14-DOM的CRUD.html中的p标签
    var p = document.getElementById('word');
    console.log(p);
    var img1 = document.createElement('img');
    img1.src = '../images/icon_03.png';
    p.appendChild(img1);


// d 删除
    // 1.
    //document.body.removeChild(p);
    // 2.拿到当前标签的父标签再来删除
    //p.parentNode.removeChild(p);
    // 3.
    p.remove();

// 改...

// 查
    // 1.
    find(document.body);

    function find(object){
        for(var i in object){
            console.log(object[i]);
        }
    }
    // 2.
    console.log(document.body.childNodes);

