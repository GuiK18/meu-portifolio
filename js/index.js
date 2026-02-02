lista_links =
[
    {logo: "imagens/logo_github.png", nome: "GITHUB", link: "https://github.com/GuiK18"},
    {logo: "imagens/logo_linkedin.png", nome: "LINKEDIN", link: "https://www.linkedin.com/in/guilherme-kavalco-15831434a/"},
    {logo: "imagens/mais.png", nome: "MAIS INFORMAÇÕES", link: ""}
];


for(var i = 0; i < lista_links.length; i++){
    var html = `<div class="links">
                    <div class="logo">
                        <img src="${lista_links[i].logo}" width="60" height="60">
                    </div>
                    <div class="nome_acesso">${lista_links[i].nome}</div>
                    <div class="logo">
                        <img src="${lista_links[i].logo}" width="60" height="60">
                    </div>
                </div>`;

    document.getElementById('informacoes').innerHTML += html;
}

