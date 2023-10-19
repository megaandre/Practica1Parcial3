let $btnLight = document.querySelector("#btn-light");
let $btnDark = document.querySelector("#btn-dark");

$btnLight.addEventListener("click", function (e) {
    document.body.style.backgroundImage = "url('./img/Background.jpg')";
    document.body.style.color = "black";
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = "black";  
        }
    }  
  });
  
  $btnDark.addEventListener("click", (e) => {
    document.body.style.backgroundImage = "url('./img/BackgroundDark.png')";
    document.body.style.color = "white";
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = "white";  
        }
    }  
  });

  async function obtenerDatos1() {
    let respuesta = await fetch("js/albumsninfo.json");
    let datos = await respuesta.json();
  
    let $info = document.querySelector("#info2");
  
    $info.innerHTML = `
    <div class="wrap">
        <figure>
            <img src="${datos.TDSOTM.img}" alt="${datos.TDSOTM.name}" class="album">
            <figcaption>${datos.TDSOTM.name}</figcaption>
        </figure>
    </div>
    `;
    }

    async function obtenerDatos2() {
        let respuesta = await fetch("js/albumsninfo.json");
        let datos = await respuesta.json();
      
        let $info = document.querySelector("#info");
      
        $info.innerHTML = `
        <div class="wrapl">
            <figure>
                <img src="${datos.PATGOD.img}" alt="${datos.PATGOD.name}" class="album">
                <figcaption>${datos.PATGOD.name}</figcaption>
            </figure>
        </div>
        `;
        }

        async function obtenerDatos3() {
            let respuesta = await fetch("js/albumsninfo.json");
            let datos = await respuesta.json();
          
            let $info = document.querySelector("#info3");
          
            $info.innerHTML = `
            <div class="wrapl">
                <figure>
                    <img src="${datos.WYWH.img}" alt="${datos.WYWH.name}" class="album">
                    <figcaption>${datos.WYWH.name}</figcaption>
                </figure>
            </div>
            `;
            }


    obtenerDatos1();
    obtenerDatos2();
    obtenerDatos3();
  

