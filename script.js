function getData(){
    

    const input = document.querySelector("#url").value;
    if(input!=""){
        document.querySelector('.load').innerHTML=`<p>Loading....</p>`;
        fetch(`https://api.shrtco.de/v2/shorten?url=${input}`,{
            method:'GET'
        })
        .then((data) => data.json())
        .then((data) => {
            document.querySelector('.load').remove();
            const short_url = Object.entries(data.result);
            console.log(short_url[2][1]);
            const div = document.createElement('div');
            div.setAttribute('class','output-field');
            div.setAttribute('id','div')
            div.innerHTML=`<input type="text" id="shorten-url" disabled >`;
            document.querySelector('.inner-content').append(div);
            const output = document.querySelector('#shorten-url');
            output.value = short_url[2][1];
        })
        .catch((data)=> alert('Sorry, we Cant make this URL shorter !!!'))
    }else{
        alert('Enter a URL');
    }
}