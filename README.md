<style>
  html {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background: #1B1D22;
  color: rgba(255, 255, 255, 0.932);
}

.center {
  width: 80%;
  margin: auto;
}

h1 {
  font-size: 80px;
}

p {
  text-align: justify;
  font-size: 20px;
}

#div-img-exemplo {
  display: flex;
  align-items: center;
}

.imgs {
  width: 100%;
}

#img-exemplo {
  width: 80%;
  display: flex;
  align-items: center;
  margin: auto;
}

.float{
  right:40px;
  position:fixed;
  height:60px;
  bottom:30px;
  z-index:100;
}

#msg1 {
  background: #fff;
  color: #000;
  position: fixed;
  width: 130px;
  bottom: 55px;
  right: 90px;
  font-size: 16px;
  line-height: 15px;
  padding: 10px;
  border-radius: 10px;
  border:1px solid #e2e2e2;
  z-index:100;
  visibility: hidden;
}

@media (max-width: 480px){
  #msg1 {
    display: none !important;
  }

  .float{
    right:20px;
    height:60px;
    bottom:30px;
  }
}
</style>

<body class="center">
  <header>
    <h1>Botão flutuante para o WhatsApp</h1>
  </header>

  <div>
    <h2>Para usar esse botão no seu site você precisa fazer algumas pequenas alterações:</h2>
  </div>

  <div>
    <p>
      Primeiro você precisa adicionar no seu projeto os scripts disponibilizados no repositório e
      usar de exemplo a tag a (que é o botão em si).
    </p>
  </div>

  <div>
    <p>
      Você precisa alterar também o número do celular do qual será recebida a mensagem a partir do seu site,
      você faz essa alteração no link da API do WhatsApp presente no href da tag a:
    </p>
  </div>

  <div>
    <img src="img/trecho-botao-tag-a-api.PNG" class="imgs">
  </div>

  <div>
    <p>
      Em seguida altere a mensagem de sugestão, quando o usuário clicar no botão ele será direcionado ao
      WhatsApp na conversa do número que você inseriu anteriormente, e na caixa de texto do WhatsApp terá
      uma mensagem que você vai determinar qual é, isso você pode fazer também na tag a dentro do href.
    </p>
  </div>

  <div>
    <p>
      Após fazer essas alterações você pode fazer manipular a duração dos eventos lá no script.js,
      você pode também manipular o CSS para deixar tudo do seu gosto, como o  estilo da caixa de texto
      que contém a frase "Fale conosco via WhatsApp".
    </p>
  </div>
</body>

</html>