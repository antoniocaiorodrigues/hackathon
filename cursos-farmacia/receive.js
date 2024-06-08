pegar();

async function pegar() {

    try {

        const response = await fetch("http://187.49.85.157:7000/farmacia");
        const data = await response.json();
        const dados = data.dados;

        const i = localStorage.getItem("Id");

        console.log(i);

        document.querySelector("header").innerHTML += `
        
        <nav class="navbar img">
            <img src="home/bio.png" alt="Logo Biopark">
            <div>
                <a class="menu-item" href="forum.html">Forum</a>
                <a class="menu-item" href="sobre.html">Sobre</a>
                <a class="menu-item ativo" href="cursos.html">Cursos</a>
                <a class="menu-item" href="dashboard.html">Dashboard</a>
            </div>
        </nav>
        <div>
            <h3>Curso de:</h3><h1 class="titulo-area">`+ dados[i].curso +`</h1>
        </div>
        
        `

        document.querySelector("section").innerHTML += `

            <div class="esquerda">
            <strong>Sobre o curso</strong><br>
            <p>`+dados[i].Objetivo+`</p>
        </div>
        <div class="right">
            <div class="box">
               <a><strong> Carga horária:</strong></a>
                <p>`+dados[i].carga+`</p>
            </div>
            <div class="box">
                <a> <strong>Publico-Alvo :</strong></a>
               <p>`+dados[i].publico+`</p>
            </div>
            <div class="box">
                <strong><a></a>Metodologia do curso:</strong>
                <p>`+dados[i].metodologia+`</p>
            </div>
        </div>
            
            `
        
    } catch (error) {
        console.log(error);
    }
    
}